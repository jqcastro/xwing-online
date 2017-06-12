import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { GameService } from 'app/shared/services/game.service';
import { Subscription } from 'rxjs/Subscription';
import { Board } from 'app/model/board';
import { ToPixelsPipe } from 'app/shared/pipes/to-pixels.pipe';

@Component({
  selector: 'xwo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  private _board: Board = new Board();
  private set board(board: Board) {
    this._board = board;
    this.width = this.toPixelsPipe.transform(this.board.width);
    this.height = this.toPixelsPipe.transform(this.board.height);
    this.backgroundColor = this.board.background;
  }
  private get board() { return this._board; }

  private subscriptions: Subscription[] = [];

  @HostBinding('style.width') width: string = this.toPixelsPipe.transform(this.board.width);
  @HostBinding('style.height') height: string = this.toPixelsPipe.transform(this.board.height);
  @HostBinding('style.backgroundColor') backgroundColor: string = this.board.background;

  constructor(
    private gameService: GameService,
    private toPixelsPipe: ToPixelsPipe
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
