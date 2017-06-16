import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from 'app/model/ship';
import { Maneuver, Speed } from 'app/model/maneuver';
import { BaseComponent } from 'app/shared/base.component';
import { Bearing } from 'app/model/bearing.enum';

class DialMap {
  [speed: number]: [{[bearing in Bearing]?: Maneuver}];
};

@Component({
  selector: 'xwo-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent extends BaseComponent {
  @Input() ship: Ship;
  @Output() onSelectManeuver: EventEmitter<Maneuver> = new EventEmitter<Maneuver>();

  private orderedBearing: Bearing[] = [
    Bearing.TurnLeft,
    Bearing.BankLeft,
    Bearing.Straight,
    Bearing.BankRight,
    Bearing.TurnRight,
    Bearing.TallonRollLeft,
    Bearing.SegnorsLoopLeft,
    Bearing.KoiogranTurn,
    Bearing.SegnorsLoopRight,
    Bearing.TallonRollRight,
    Bearing.Stationary,
    Bearing.Reverse
  ];

  constructor() {
    super();
  }

  protected getSpeeds(dial: Maneuver[]): Speed[] {
    const result: Speed[] = [];
    dial.forEach(m => {
      if (result.indexOf(m.speed) < 0) {
        result.push(m.speed);
      }
    });
    return result.sort((a, b) => b - a);
  }

  protected getBearings(dial: Maneuver[]): Bearing[] {
    const result: Bearing[] = [];
    this.orderedBearing.forEach(bearing => {
      if (dial.find(m => m.bearing === bearing)) {
        result.push(bearing);
      }
    });
    return result;
  }

  protected getManeuver(dial: Maneuver[], speed: Speed, bearing: Bearing): Maneuver {
    return dial.find(m => m.speed === speed && m.bearing === bearing);
  }

  protected selectManeuver(maneuver: Maneuver) {
    this.onSelectManeuver.emit(maneuver);
  }
}
