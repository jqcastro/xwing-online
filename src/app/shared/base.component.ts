import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Unit } from 'app/model/unit.enum';
import { Sizes } from 'app/model/size.enum';
import { Difficulty } from 'app/model/difficulty.enum';

export class BaseComponent implements OnDestroy {
  Unit: typeof Unit = Unit;
  Sizes: typeof Sizes = Sizes;
  Difficulty: typeof Difficulty = Difficulty;
  subscriptions: Subscription[] = [];

  constructor() { }

  unsubscribe() {
    if (this.subscriptions.length) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
