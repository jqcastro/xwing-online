import { Player } from 'app/model/player';
import { Board } from 'app/model/board';
import { Squadron } from 'app/model/squadron';
import { Faction } from 'app/model/faction.enum';

export class Game {
    constructor(
      public board: Board = new Board(),
      private players: Player[] = [],
    ) {
      this.board = board;
      this.players = players;
    }
}
