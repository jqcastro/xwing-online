import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class NavigationService {

  private navigationExtras = <NavigationExtras>{queryParamsHandling: 'preserve', preserveFragment: true};

  constructor(private router: Router) { }

  public goToGame(gameId: number) {
    this.router.navigate(['game', gameId], this.navigationExtras);
  }

  public goToNotFound() {
    this.router.navigate(['404'], this.navigationExtras);
  }
}
