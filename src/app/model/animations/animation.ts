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
  protected abstract undo();

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
