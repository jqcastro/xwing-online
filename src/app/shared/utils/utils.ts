export class Utils {
  public static SCALE_FACTOR: number = 0.01;
  public static scale(value: number): number {
    return value * this.SCALE_FACTOR;
  }
}
