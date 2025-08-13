import { Vehicle } from "./Vehicle";

export class Plane implements Vehicle {
  drive(): void {
    console.log("Flying through the skies with cargo...");
  }
}
