export class Board {
  width: number;
  height: number;
  background: string;

  constructor(width: number = 900, height: number = 900, background: string = '#ccc') {
    this.width = width;
    this.height = height;
    this.background = background;
  }
}
