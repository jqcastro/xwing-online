import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/shared/services/game.service';
import { NavigationService } from 'app/shared/services/navigation.service';

@Component({
  selector: 'xwo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private navigationService: NavigationService, private gameService: GameService) { }

  ngOnInit() {
  }

  newGame() {
    this.gameService.newGame();
    this.navigationService.goToBoard();
  }

}
