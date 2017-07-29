import kebabCase from 'just-kebab-case';

export class Pilot {
  constructor(
    public name: string,
    public skill: number,
    public unique: boolean = false,
    public token: number = 0
  ) { }

  public get id() {
    return kebabCase(this.name + (this.unique ? '' : this.token));
  }
}
