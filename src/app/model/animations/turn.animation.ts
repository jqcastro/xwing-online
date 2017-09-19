import { Vector3, Mesh, Space, Axis } from 'babylonjs';
import { Maneuver } from 'app/model/maneuver';
import { Sizes } from 'app/model/size.enum';
import { Ship } from 'app/model/ship';
import { Utils } from 'app/shared/utils/utils';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Animation } from 'app/model/animations/animation';
import { Bearing } from 'app/model/bearing.enum';

export class TurnAnimation extends Animation {
  private radiusMap: { [speed: number]: number } = {
    [1]: 35,
    [2]: 63,
    [3]: 90
  };
  private targetAngle: number = 90;
  private turn: number = 1;
  private currentAngle: number = 0;
  private radius: number = this.radiusMap[1];
  private angle: number = 0;
  private center: Vector3;

  constructor(
    public mesh: Mesh,
    public ship: Ship,
    public maneuver: Maneuver
  ) {
    super(mesh);
    this.radius = Utils.scale(this.radiusMap[maneuver.speed] + (Sizes[this.ship.size] / 2));
  }

  // cx,cy origin, r radius, a angle
  // x = cx + r * cos(a)
  // y = cy + r * sin(a)

  animate(canCollideWith: Mesh[] = []) {
    if (this.animationFinished.isStopped) { return; }

    if (this.currentAngle < this.targetAngle) {

      this.angle = this.getAngle();

      const x = this.radius * Math.cos(this.angle);
      const z = this.radius * Math.sin(this.angle);

      const xVector = new Vector3(0, 0, 1);
      this.mesh.translate(xVector, Utils.scale(x), Space.LOCAL);

      const zVector = new Vector3(0, 0, 1);
      this.mesh.translate(zVector, Utils.scale(z), Space.LOCAL);

      this.mesh.rotate(Axis.Y, this.angle * Math.PI / 180, Space.LOCAL);
      this.currentAngle += this.angle;

      console.log(Utils.scale(x), Utils.scale(z), this.angle, this.currentAngle);

      // if collision is detected undo the animation
      // if (this.checkCollision(canCollideWith)) {
      //   this.undo(); // undo last animation step in order to avoid collision
      //   this.finishAnimation();
      // }

    } else {
      this.finishAnimation();
    }
  }

  undo() {
    // const x = this.radius * Math.cos(this.angle * Math.PI / 180);
    // const z = this.radius * Math.sin(this.angle * Math.PI / 180);

    // const xVector = new Vector3(0, 0, 1);
    // this.mesh.translate(xVector, Utils.scale(x), Space.LOCAL);

    // const zVector = new Vector3(0, 0, 1);
    // this.mesh.translate(zVector, Utils.scale(z), Space.LOCAL);

    // this.mesh.rotate(Axis.Y, this.angle * Math.PI / 180, Space.LOCAL);
    // this.currentAngle += this.angle;
  }

  private getAngle(): number {
    let result = this.step;
    const next = this.currentAngle + this.step;
    if (next > this.targetAngle) {
      result = this.targetAngle - this.currentAngle;
    }
    return result;
  }
}
