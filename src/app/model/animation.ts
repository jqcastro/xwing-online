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
    public step: number = 1
  ) {}

  public abstract animate();
}

export class StraightAnimation extends Animation {
  target: number;
  current: number = 0;

  constructor(
    public mesh: Mesh,
    public ship: Ship,
    public speed: Speed
  ) {
    super();
    this.target = (Sizes.regular * this.speed) + Sizes[this.ship.size];
  }

  animate() {
    const vector = new Vector3(0, 0, 1);
    if (this.current < this.target) {
      const distance = this.getDistance();
      this.mesh.translate(vector, Utils.scale(distance), Space.LOCAL);
      this.current += distance;
    } else {
      this.animationFinished.next(this);
      this.animationFinished.complete();
    }
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
