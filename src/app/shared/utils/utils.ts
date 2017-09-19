export class Utils {
  public static SCALE_FACTOR: number = 0.01;
  public static scale(value: number, factor: number = this.SCALE_FACTOR): number {
    return value * this.SCALE_FACTOR;
  }
}
