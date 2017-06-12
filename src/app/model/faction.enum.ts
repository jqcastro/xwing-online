export enum Faction {
  RebelAlliance,
  GalacticEmpire,
  ScumAndVillainy
}

export enum SubFaction {
  RebelAlliance,
  Resistance,
  GalacticEmpire,
  FirstOrder,
  ScumAndVillainy
}

export const Factions: {[faction: number]: SubFaction[]} = {
  [Faction.GalacticEmpire]: [SubFaction.GalacticEmpire, SubFaction.FirstOrder],
  [Faction.RebelAlliance]: [SubFaction.RebelAlliance, SubFaction.Resistance],
  [Faction.ScumAndVillainy]: [SubFaction.ScumAndVillainy]
}
