export interface ICarry {
  title: string;
  description: string;
}
export class Carry implements ICarry {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
