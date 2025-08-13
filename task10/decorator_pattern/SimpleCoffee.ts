import { Coffee } from "./Coffee";

export class SimpleCoffee implements Coffee {
  cost(): number {
    return 5; // Base cost
  }

  description(): string {
    return "Simple coffee";
  }
}
