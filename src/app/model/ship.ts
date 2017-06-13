import { Faction, SubFaction, Factions } from 'app/model/faction.enum';
import { Size } from 'app/model/size.enum';

export class Ship {
  constructor(
    public faction: Faction,
    public size: Size = Size.Regular,
    public subfaction: SubFaction = Factions[faction][0],
    public facing: number = 0
  ) { }
}
