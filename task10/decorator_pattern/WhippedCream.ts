import { Coffee } from "./Coffee";

export class WhippedCream implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return `${this.coffee.description()}, whipped cream`;
  }
}
