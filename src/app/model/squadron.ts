import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';

export class Squadron {
  faction: Faction;
  ships: Ship[];

  constructor(faction: Faction, ships: Ship[] = []) {
    this.faction = faction;
    this.ships = ships;
  }
}
