import { Vehicle } from "./Vehicle";

export class Truck implements Vehicle {
  drive(): void {
    console.log("Driving on roads with cargo...");
  }
}
