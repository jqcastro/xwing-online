import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Game } from 'app/model/game';
import { Observable } from 'rxjs/Observable';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { Squadron } from 'app/model/squadron';
import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';
import { Size } from 'app/model/size.enum';

@Injectable()
export class GameService {

  game: BehaviorSubject<Game> = new BehaviorSubject<Game>(new Game());

  constructor() { }

  public newGame() {
    const game = new Game(
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
              new Ship(Faction.RebelAlliance, Size.Regular)
            ])
        )
      ]
    );
    this.game.next(game);
  }

  public getGame(): Observable<Game> {
    return this.game.asObservable();
  }
}
