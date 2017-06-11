import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class NavigationService {

  private navigatinExtras = <NavigationExtras>{queryParamsHandling: 'preserve', preserveFragment: true};

  constructor(private router: Router) { }

  public goToBoard() {
    this.router.navigate(['board'], this.navigatinExtras);
  }

}
