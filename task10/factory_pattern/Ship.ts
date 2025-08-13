import { Vehicle } from "./Vehicle";

export class Ship implements Vehicle {
  drive(): void {
    console.log("Sailing the seas with cargo...");
  }
}
