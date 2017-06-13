import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Unit } from 'app/model/unit.enum';
import { Sizes } from 'app/model/size.enum';
import { BaseComponent } from 'app/shared/base.component';

export class PositionComponent extends BaseComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;

  constructor() { super(); }
}
