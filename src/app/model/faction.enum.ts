const Faction = {
  RebelAlliance: 'rebel-alliance' as 'rebel-alliance',
  GalacticEmpire: 'galactic-empire' as 'galactic-empire',
  ScumAndVillainy: 'scum-and-villainy' as 'scum-and-villainy'
}
type Faction = (typeof Faction)[keyof typeof Faction];
export { Faction };

const SubFaction = {
  RebelAlliance: 'rebel-alliance' as 'rebel-alliance',
  Resistance: 'resistance' as 'resistance',
  GalacticEmpire: 'galactic-empire' as 'galactic-empire',
  FirstOrder: 'first-order' as 'first-order',
  ScumAndVillainy: 'scum-and-villainy' as 'scum-and-villainy'
}
type SubFaction = (typeof SubFaction)[keyof typeof SubFaction];
export { SubFaction };

type FactionIndex = { [faction in Faction]?: SubFaction[] };
export const Factions: FactionIndex = {
  [Faction.GalacticEmpire]: [SubFaction.GalacticEmpire, SubFaction.FirstOrder],
  [Faction.RebelAlliance]: [SubFaction.RebelAlliance, SubFaction.Resistance],
  [Faction.ScumAndVillainy]: [SubFaction.ScumAndVillainy]
}
