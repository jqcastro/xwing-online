import { Vector3, Mesh } from 'babylonjs/dist/preview release/babylon.module';

export abstract class Animation {
  constructor(
    public step: number = 0
  ) {}
}

export class TranslateAnimation extends Animation {
  public current: Vector3 = Vector3.Zero();

  constructor(
    public step: number = 0,
    public translateTo: Vector3,
  ) {
    super(step);
  }

  next(): Vector3 {

  }
}
