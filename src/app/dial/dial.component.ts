import { Component, Input } from '@angular/core';
import { Ship } from 'app/model/ship';
import { Maneuver, Speed } from 'app/model/maneuver';

@Component({
  selector: 'xwo-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent {
  @Input() ship: Ship;

  constructor() { }

  getSpeeds(maneuvers: Maneuver[]): Speed[] {
    const result = [];
    maneuvers.forEach(m => {
      if (!result.indexOf(m.speed)) {
        result.push(m.speed);
      }
    });
    return result.sort();
  }

  getManeuversBySpeed(speed: Speed, maneuvers: Maneuver[]): Maneuver[] {
    return maneuvers.filter(m => m.speed === speed);
  }

}
