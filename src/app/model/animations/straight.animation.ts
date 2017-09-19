import { Vector3, Mesh, Space } from 'babylonjs';
import { Speed } from 'app/model/maneuver';
import { Sizes } from 'app/model/size.enum';
import { Ship } from 'app/model/ship';
import { Utils } from 'app/shared/utils/utils';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Animation } from 'app/model/animations/animation';

export class StraightAnimation extends Animation {
  private target: number;
  private current: number = 0;
  private distance: number = 0;

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
