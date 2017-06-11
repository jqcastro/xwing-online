import { Player } from 'app/model/player';
import { Board } from 'app/model/board';

export class Game {
    players: Player[];
    board: Board;

    constructor() {
      this.players = [
        new Player(),
        new Player()
      ];
      this.board = new Board();
    }
}
