import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Game } from 'app/model/game';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { Squadron } from 'app/model/squadron';
import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';
import { Size } from 'app/model/size.enum';

@Injectable()
export class GameService {
  private games = [
    new Game(
      1,
      new Board(900, 900, '/assets/images/star-killer.jpg'),
      [
        new Player(
          'Player 1',
          new Squadron(
            Faction.RebelAlliance, [
              new Ship(Faction.RebelAlliance, Size.Regular)
            ])
        ),
        new Player(
          'Player 2',
          new Squadron(
            Faction.GalacticEmpire, [
              new Ship(Faction.GalacticEmpire, Size.Regular)
            ])
        )
      ]
    ),
  ];

  game: BehaviorSubject<Game> = new BehaviorSubject<Game>(this.games[0]);

  constructor() { }

  public newGame(): Observable<Game> {
    const game = this.games[0];
    this.game.next(game);
    return this.getGame(game.id);
  }

  public getGame(gameId: number): Observable<Game> {
    return this.game.asObservable();
  }
}
