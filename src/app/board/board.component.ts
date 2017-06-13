import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { GameService } from 'app/shared/services/game.service';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { BaseComponent } from 'app/shared/base.component';

@Component({
  selector: 'xwo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BaseComponent implements OnDestroy {
  protected board: Board = new Board();
  protected players: Player[] = [];

  constructor(
    private gameService: GameService
  ) {
    super();

    this.subscriptions.push(
      this.gameService.getGame()
        .subscribe(game => {
          this.board = game.board;
          this.players = game.players;
      })
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
