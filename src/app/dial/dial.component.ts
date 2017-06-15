import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from 'app/model/ship';
import { Maneuver, Speed } from 'app/model/maneuver';
import { BaseComponent } from 'app/shared/base.component';

@Component({
  selector: 'xwo-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent extends BaseComponent {
  @Input() ship: Ship;
  @Output() onSelectManeuver: EventEmitter<Maneuver> = new EventEmitter<Maneuver>();

  constructor() {
    super();
  }

  getSpeeds(maneuvers: Maneuver[]): Speed[] {
    const result = [];
    maneuvers.forEach(m => {
      if (result.indexOf(m.speed) < 0) {
        result.push(m.speed);
      }
    });
    return result.sort();
  }

  getManeuversBySpeed(speed: Speed, maneuvers: Maneuver[]): Maneuver[] {
    return maneuvers.filter(m => m.speed === speed);
  }

  selectManeuver(maneuver: Maneuver) {
    this.onSelectManeuver.emit(maneuver);
  }
}
