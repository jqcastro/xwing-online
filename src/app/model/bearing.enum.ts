const Bearing = {
  Straight: 'straight' as 'straight',
  BankLeft: 'bank-left' as 'bank-left',
  BankRight: 'bank-right' as 'bank-right',
  TurnLeft: 'turn-left' as 'turn-left',
  TurnRight: 'turn-right' as 'turn-right',
  KoiogranTurn: 'koiogran-turn' as 'koiogran-turn',
  SegnorsLoopLeft: 'segnors-loop-left' as 'segnors-loop-left',
  SegnorsLoopRight: 'segnors-loop-right' as 'segnors-loop-right',
  TallonRollLeft: 'tallon-roll-left' as 'tallon-roll-left',
  TallonRollRight: 'tallon-roll-right' as 'tallon-roll-right',
  Stationary: 'stationary' as 'stationary',
  Reverse: 'reverse' as 'reverse'
}
type Bearing = (typeof Bearing)[keyof typeof Bearing];
export { Bearing };

export const rightBearings: Bearing[] = [
  Bearing.BankRight,
  Bearing.TurnRight,
  Bearing.SegnorsLoopRight,
  Bearing.TallonRollRight
];

export const leftBearings: Bearing[] = [
  Bearing.BankLeft,
  Bearing.TurnLeft,
  Bearing.SegnorsLoopLeft,
  Bearing.TallonRollLeft
];
