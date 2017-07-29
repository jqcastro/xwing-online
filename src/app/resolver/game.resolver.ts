import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Game } from 'app/model/game';
import { GameService } from 'app/shared/services/game.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class GameResolver implements Resolve<Game> {
  constructor(
      private gameService: GameService
  ) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Game> | Promise<Game> | Game {
    const gameId = +route.params.gameId;
    return this.gameService.loadGame(gameId)
      .first(); 
      // Currently the router waits for the observable to close. 
      //You can ensure it gets closed after the first value is emitted, by using the first() operator
  }
}