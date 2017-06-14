import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class NavigationService {

  private navigatinExtras = <NavigationExtras>{queryParamsHandling: 'preserve', preserveFragment: true};

  constructor(private router: Router) { }

  public goToGame(gameId: number) {
    this.router.navigate([`game/${gameId}`], this.navigatinExtras);
  }

}
