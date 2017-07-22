import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GameService } from '../../app/shared/services/game.service';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { BaseComponent } from 'app/shared/base.component';
import { ActivatedRoute } from '@angular/router';
import { Ship } from 'app/model/ship';
import { Maneuver } from 'app/model/maneuver';
import { RenderService } from "app/shared/services/render.service";
import { Game } from "app/model/game";

@Component({
  selector: 'xwo-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BaseComponent implements OnDestroy, AfterViewInit {
  private game: Game;
  protected board: Board = new Board();
  protected players: Player[] = [];
  protected selectedShip: Ship;

  @ViewChild('board') boardRef: ElementRef;
  private canvas: HTMLCanvasElement;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private renderService: RenderService
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
                this.game = game;
                this.board = game.board;
                this.players = game.players;
            })
          );
      })
    );
  }

  ngAfterViewInit() {
    this.canvas = this.boardRef.nativeElement;
    this.renderService.render(this.canvas, this.game);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  selectShip(ship: Ship) {
    this.selectedShip = ship;
  }

  selectManeuver(maneuver: Maneuver) {
    alert(maneuver.bearing + ' ' + maneuver.difficulty);
  }
}
