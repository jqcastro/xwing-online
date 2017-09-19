import { Injectable } from '@angular/core';
import { Maneuver } from 'app/model/maneuver';
import { Bearing } from 'app/model/bearing.enum';
import { Utils } from 'app/shared/utils/utils';
import { Animation } from 'app/model/animations/animation';
import { Mesh } from 'babylonjs/dist/preview release/babylon.module';
import { Ship } from 'app/model/ship';
import { StraightAnimation } from 'app/model/animations/straight.animation';
import { TurnAnimation } from 'app/model/animations/turn.animation';

@Injectable()
export class AnimationService {

  constructor() { }

  public getManeuverAnimation(maneuver: Maneuver, ship: Ship, mesh: Mesh): Animation {
    let animation: Animation;
    switch (maneuver.bearing) {
      case Bearing.Straight:
        animation = new StraightAnimation(mesh, ship, maneuver.speed);
      break;
      case Bearing.TurnLeft:
      case Bearing.TurnRight:
        animation = new TurnAnimation(mesh, ship, maneuver);
        break;
      default:
        animation = new StraightAnimation(mesh, ship, maneuver.speed);
      break;
    }
    return animation;
  }

}
