import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';

export class Squadron {
  constructor(
    public faction: Faction,
    public ships: Ship[] = []
  ) { }
}
