import { Faction, SubFaction, Factions } from 'app/model/faction.enum';
import { Size } from 'app/model/size.enum';

export class Ship {
  faction: Faction;
  subfaction: SubFaction;
  size: Size;

  constructor(
    faction: Faction,
    size: Size = Size.Regular,
    subfaction: SubFaction = Factions[faction][0]
  ) {
    this.faction = faction;
    this.size = size;
    this.subfaction = subfaction;
  }
}
