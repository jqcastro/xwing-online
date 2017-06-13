import { Component, Input } from '@angular/core';
import { Board } from 'app/model/board';
import { Ship } from 'app/model/ship';
import { PositionComponent } from 'app/shared/position.component';

@Component({
  selector: 'xwo-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent extends PositionComponent {
  @Input() ship: Ship;
  @Input() board: Board;

  constructor() {
    super();
  }
}
