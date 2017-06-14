import { Component, OnDestroy } from '@angular/core';
import { GameService } from 'app/shared/services/game.service';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { BaseComponent } from 'app/shared/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xwo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BaseComponent implements OnDestroy {
  protected board: Board = new Board();
  protected players: Player[] = [];

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
    this.subscriptions.push(
      this.activatedRoute.data
        .subscribe((data: {gameId: number}) => {

          // retrieve game using gameId from params
          this.subscriptions.push(
            this.gameService.getGame(data.gameId)
              .subscribe(game => {

                // load data from retrieved game
                this.board = game.board;
                this.players = game.players;
            })
          );
      })
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
