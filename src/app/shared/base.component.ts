import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Unit } from 'app/model/unit.enum';
import { Sizes } from 'app/model/size.enum';
import { Difficulty } from 'app/model/difficulty.enum';

export class BaseComponent implements OnDestroy {
  protected Unit: typeof Unit = Unit;
  protected Sizes: typeof Sizes = Sizes;
  protected Difficulty: typeof Difficulty = Difficulty;
  protected subscriptions: Subscription[] = [];

  constructor() { }

  ngOnDestroy() {
    if (this.subscriptions.length) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
}
