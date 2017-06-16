import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Maneuver } from 'app/model/maneuver';
import { BaseComponent } from 'app/shared/base.component';

@Component({
  selector: 'xwo-maneuver',
  templateUrl: './maneuver.component.html',
  styleUrls: ['./maneuver.component.scss']
})
export class ManeuverComponent extends BaseComponent {
  @Input() maneuver: Maneuver;
  @Output() maneuverSelected: EventEmitter<Maneuver> = new EventEmitter<Maneuver>();

  constructor() {
    super();
  }

  selectManeuver() {
    this.maneuverSelected.emit(this.maneuver);
  }
}
