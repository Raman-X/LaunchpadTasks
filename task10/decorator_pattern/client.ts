import { Milk } from "./Milk";
import { SimpleCoffee } from "./SimpleCoffee";
import { Sugar } from "./Sugar";
import { WhippedCream } from "./WhippedCream";

// Start with a simple coffee
let myCoffee = new SimpleCoffee();

// Add milk
myCoffee = new Milk(myCoffee);

// Add sugar
myCoffee = new Sugar(myCoffee);

// Add whipped cream
myCoffee = new WhippedCream(myCoffee);

console.log(`Order: ${myCoffee.description()}`);
console.log(`Total cost: $${myCoffee.cost().toFixed(2)}`);
