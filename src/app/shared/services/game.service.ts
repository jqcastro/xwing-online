import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Game } from 'app/model/game';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {

  game: Subject<Game> = new Subject<Game>();

  constructor() { }

  public newGame() {
    const game = new Game();
    this.game.next(game);
  }

  public getGame(): Observable<Game> {
    return this.game.asObservable();
  }
}
