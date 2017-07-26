import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Game } from 'app/model/game';
import { Board } from 'app/model/board';
import { Player } from 'app/model/player';
import { Squad } from 'app/model/squad';
import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';
import { Size } from 'app/model/size.enum';
import { Bearing } from 'app/model/bearing.enum';
import { Maneuver } from 'app/model/maneuver';
import { Difficulty } from 'app/model/difficulty.enum';
import { Pilot } from 'app/model/pilot';

@Injectable()
export class GameService {

  private dials: {[shipId: string]: Maneuver[]} = {
    ['x-wing']: [
      new Maneuver(1, Bearing.BankLeft, Difficulty.Green),
      new Maneuver(1, Bearing.Straight, Difficulty.Green),
      new Maneuver(1, Bearing.BankRight, Difficulty.Green),

      new Maneuver(2, Bearing.TurnLeft, Difficulty.White),
      new Maneuver(2, Bearing.BankLeft, Difficulty.White),
      new Maneuver(2, Bearing.Straight, Difficulty.Green),
      new Maneuver(2, Bearing.BankRight, Difficulty.White),
      new Maneuver(2, Bearing.TurnRight, Difficulty.White),

      new Maneuver(3, Bearing.TurnLeft, Difficulty.White),
      new Maneuver(3, Bearing.BankLeft, Difficulty.White),
      new Maneuver(3, Bearing.Straight, Difficulty.White),
      new Maneuver(3, Bearing.BankRight, Difficulty.White),
      new Maneuver(3, Bearing.TurnRight, Difficulty.White),

      new Maneuver(4, Bearing.Straight, Difficulty.White),
      new Maneuver(4, Bearing.KoiogranTurn, Difficulty.Red)
    ],
    ['tie-fighter']: [
      new Maneuver(1, Bearing.TurnLeft, Difficulty.White),
      new Maneuver(1, Bearing.TurnRight, Difficulty.White),

      new Maneuver(2, Bearing.TurnLeft, Difficulty.White),
      new Maneuver(2, Bearing.BankLeft, Difficulty.Green),
      new Maneuver(2, Bearing.Straight, Difficulty.Green),
      new Maneuver(2, Bearing.BankRight, Difficulty.Green),
      new Maneuver(2, Bearing.TurnRight, Difficulty.White),

      new Maneuver(3, Bearing.TurnLeft, Difficulty.White),
      new Maneuver(3, Bearing.BankLeft, Difficulty.White),
      new Maneuver(3, Bearing.Straight, Difficulty.Green),
      new Maneuver(3, Bearing.BankRight, Difficulty.White),
      new Maneuver(3, Bearing.TurnRight, Difficulty.White),
      new Maneuver(3, Bearing.KoiogranTurn, Difficulty.Red),

      new Maneuver(4, Bearing.Straight, Difficulty.White),
      new Maneuver(4, Bearing.KoiogranTurn, Difficulty.Red),

      new Maneuver(5, Bearing.Straight, Difficulty.White),
    ]
  };

  private pilots: { [pilotId: string]: Pilot } = {
    ['rookie-pilot']: new Pilot('Rookie Pilot', 2),
    ['academy-pilot']: new Pilot('Academy Pilot', 1)
  };

  private games = [
    new Game(
      1,
      new Board(900, 900, '/assets/images/star-killer.jpg'),
      [
        new Player(
          'Player 1',
          new Squad(
            Faction.RebelAlliance, [
              new Ship(
                'x-wing',
                Faction.RebelAlliance,
                this.dials['x-wing'],
                this.pilots['rookie-pilot'])
            ])
        ),
        new Player(
          'Player 2',
          new Squad(
            Faction.GalacticEmpire, [
              new Ship(
                'tie-fighter',
                Faction.GalacticEmpire,
                this.dials['tie-fighter'],
                this.pilots['academy-pilot'])
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
