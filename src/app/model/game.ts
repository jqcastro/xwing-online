import { Player } from 'app/model/player';
import { Board } from 'app/model/board';
import { Squad } from 'app/model/squad';
import { Faction } from 'app/model/faction.enum';

export class Game {
    constructor(
      public id: number,
      public board: Board = new Board(),
      public players: Player[] = [],
    ) { }
}
