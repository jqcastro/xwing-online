import { Faction } from 'app/model/faction.enum';
import { Squad } from 'app/model/squad';

export class Player {
  constructor(
    public name: string,
    public squad: Squad
  ) { }
}
