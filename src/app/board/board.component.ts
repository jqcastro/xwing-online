import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { GameService } from 'app/shared/services/game.service';
import { Subscription } from 'rxjs/Subscription';
import { Board } from 'app/model/board';
import { Unit } from 'app/model/unit.enum';

@Component({
  selector: 'xwo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  protected board: Board = new Board();
  Unit: typeof Unit = Unit;

  private subscriptions: Subscription[] = [];

  constructor(
    private gameService: GameService
  ) {
    this.subscriptions.push(
      this.gameService.getGame()
        .subscribe(game => {
          this.board = game.board;
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscriptions.length) {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

}
