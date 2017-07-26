import { Color3 } from 'babylonjs';

const Faction = {
  RebelAlliance: 'rebel-alliance' as 'rebel-alliance',
  Resistance: 'resistance' as 'resistance',
  GalacticEmpire: 'galactic-empire' as 'galactic-empire',
  FirstOrder: 'first-order' as 'first-order',
  ScumAndVillainy: 'scum-and-villainy' as 'scum-and-villainy'
}
type Faction = (typeof Faction)[keyof typeof Faction];
export { Faction };

type FactionColor = { [faction in Faction]?: Color3 };
export const FactionColors: FactionColor = {
  [Faction.RebelAlliance]: Color3.FromHexString('#9D0303'),
  [Faction.Resistance]: Color3.FromHexString('#9D0303'),
  [Faction.GalacticEmpire]: Color3.FromHexString('#89DF10'),
  [Faction.FirstOrder]: Color3.FromHexString('#89DF10'),
  [Faction.ScumAndVillainy]: Color3.FromHexString('#BF950A')
};
