import { Player } from 'app/model/player';
import { Board } from 'app/model/board';
import { Squadron } from 'app/model/squadron';
import { Faction } from 'app/model/faction.enum';

export class Game {
    constructor(
      public board: Board = new Board(),
      private players: Player[] = [],
    ) {
      this.players = [
        new Player('Player 1', new Squadron(Faction.RebelAlliance)),
        new Player('Player 2', new Squadron(Faction.GalacticEmpire))
      ];
      this.board = new Board(900, 900, '#ceefff');
    }
}
