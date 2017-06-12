import { Faction } from 'app/model/faction.enum';
import { Squadron } from 'app/model/squadron';

export class Player {
  name: string;
  squadron: Squadron;

  constructor(name: string, squadron: Squadron) {
    this.name = name;
    this.squadron = squadron;
  }
}
