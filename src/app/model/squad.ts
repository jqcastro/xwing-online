import { Faction } from 'app/model/faction.enum';
import { Ship } from 'app/model/ship';

export class Squad {
  constructor(
    public faction: Faction,
    public ships: Ship[] = []
  ) { }
}
