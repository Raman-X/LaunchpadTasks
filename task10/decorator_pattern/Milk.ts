import { Coffee } from "./Coffee";

export class Milk implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 1.5;
  }

  description(): string {
    return `${this.coffee.description()}, milk`;
  }
}
