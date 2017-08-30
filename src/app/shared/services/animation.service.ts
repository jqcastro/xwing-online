import { Injectable } from '@angular/core';
import { Maneuver } from 'app/model/maneuver';
import { Bearing } from 'app/model/bearing.enum';
import { Utils } from 'app/shared/utils/utils';
import { Animation } from 'app/model/animation';

@Injectable()
export class AnimationService {

  constructor() { }

  public getManeuverAnimation(maneuver: Maneuver): Animation {
    let animation = new Animation();
    switch (maneuver.bearing) {
      case Bearing.Straight:

      break;
      default:

      break;
    }
    return animation;
  }

}
