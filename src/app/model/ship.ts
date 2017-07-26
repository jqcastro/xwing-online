import { Faction } from 'app/model/faction.enum';
import { Size } from 'app/model/size.enum';
import { Speed, Maneuver } from 'app/model/maneuver';
import { Bearing } from 'app/model/bearing.enum';
import { Pilot } from 'app/model/pilot';

export class Ship {
  constructor(
    public type: string,
    public faction: Faction,
    public dial: Maneuver[],
    public pilot: Pilot,
    public size: Size = Size.Regular
  ) { }

  public get id () {
    return this.pilot.id;
  }
}
