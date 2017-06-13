import { Faction } from 'app/model/faction.enum';
import { Squadron } from 'app/model/squadron';

export class Player {
  constructor(
    public name: string,
    public squadron: Squadron
  ) { }
}
