import { Coffee } from "./Coffee";

export class Sugar implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return `${this.coffee.description()}, sugar`;
  }
}
