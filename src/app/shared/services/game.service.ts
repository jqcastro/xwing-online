import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Game } from 'app/model/game';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {

  game: BehaviorSubject<Game> = new BehaviorSubject<Game>(new Game());

  constructor() { }

  public newGame() {
    const game = new Game();
    this.game.next(game);
  }

  public getGame(): Observable<Game> {
    return this.game.asObservable();
  }
}
