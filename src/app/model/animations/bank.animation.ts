import { Animation } from 'app/model/animations/animation';
import { Bearing, rightBearings } from 'app/model/bearing.enum';
import { Maneuver } from 'app/model/maneuver';
import { Observable } from 'rxjs/Observable';
import { Ship } from 'app/model/ship';
import { Sizes } from 'app/model/size.enum';
import { Subject } from 'rxjs/Subject';
import { TurnAnimation } from 'app/model/animations/turn.animation';
import { Utils } from 'app/shared/utils/utils';
import { Vector3, Mesh, Space, Axis, Angle } from 'babylonjs';

export class BankAnimation extends TurnAnimation {
  protected radiusMap: { [speed: number]: number } = {
    [1]: 80,
    [2]: 130,
    [3]: 180
  };
  protected targetAngle: number = 45;
  protected radius: number = this.radiusMap[1];

  constructor(
    public mesh: Mesh,
    public ship: Ship,
    public maneuver: Maneuver
  ) {
    super(mesh, ship, maneuver);
    this.radius = Utils.scale(this.radiusMap[maneuver.speed] + (Sizes[this.ship.size] / 2));
  }

  animate(canCollideWith: Mesh[] = []) {
    super.animate(canCollideWith);
  }
}
