import { Bearing } from 'app/model/bearing.enum';
import { Difficulty } from 'app/model/difficulty.enum';

export type Speed = 0 | 1 | 2 | 3 | 4 | 5;

export class Maneuver {
  constructor(
    public speed: Speed,
    public bearing: Bearing,
    public difficulty: Difficulty
  ) { }
}
