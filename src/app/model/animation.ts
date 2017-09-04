import { Vector3, Mesh, Space } from 'babylonjs';
import { Speed } from 'app/model/maneuver';
import { Sizes } from 'app/model/size.enum';
import { Ship } from 'app/model/ship';
import { Utils } from 'app/shared/utils/utils';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export abstract class Animation {

  protected animationFinished: Subject<Animation> = new Subject<Animation>();

  public get onAnimationFinished(): Observable<Animation> {
    return this.animationFinished.asObservable();
  }

  constructor(
    public mesh: Mesh,
    public step: number = 1
  ) {}

  public abstract animate(canCollideWith: Mesh[]);
  public abstract undo();

  protected finishAnimation() {
    this.animationFinished.next(this);
    this.animationFinished.complete();
  }

  protected checkCollision(canCollideWith: Mesh[] = []): boolean {
    let hasCollision = false;

    // update mesh position before checking collisions
    this.mesh.computeWorldMatrix(true);

    // check for collisions
    canCollideWith.some(m => {
      if (this.mesh.name !== m.name && // exclude animation self mesh
          this.mesh.intersectsMesh(m, true)) { // check collision
        hasCollision = true;
      }
      return hasCollision;
    });
    return hasCollision;
  }
}

export class StraightAnimation extends Animation {
  target: number;
  current: number = 0;
  distance: number = 0;

  constructor(
    public mesh: Mesh,
    public ship: Ship,
    public speed: Speed
  ) {
    super(mesh);
    this.target = (Sizes.regular * this.speed) + Sizes[this.ship.size];
  }

  animate(canCollideWith: Mesh[] = []) {
    if (this.animationFinished.isStopped) { return; }
    if (this.current < this.target) {

      this.distance = this.getDistance();
      const vector = new Vector3(0, 0, 1);
      this.mesh.translate(vector, Utils.scale(this.distance), Space.LOCAL);
      this.current += this.distance;

      // if collision is detected undo the animation
      if (this.checkCollision(canCollideWith)) {
        this.undo(); // undo last animation step in order to avoid collision
        this.finishAnimation();
      }

    } else {
      this.finishAnimation();
    }
  }

  undo() {
    const vector = new Vector3(0, 0, 1);
    this.mesh.translate(vector, Utils.scale(-this.distance), Space.LOCAL);
    this.current -= this.distance;
  }

  private getDistance(): number {
    let distance = this.step;
    const next = this.current + this.step;
    if (next > this.target) {
      distance = this.target - this.current;
    }
    return distance;
  }
}
