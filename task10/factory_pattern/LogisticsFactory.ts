import { Plane } from "./Plane";
import { Ship } from "./Ship";
import { Truck } from "./Truck";
import { Vehicle } from "./Vehicle";

export class LogisticsFactory {
  public static createLogistics(type: string): Vehicle {
    switch (type.toLowerCase()) {
      case "sea logistic":
        return new Ship();
      case "air logistic":
        return new Plane();
      case "land logistic":
        return new Truck();
      default:
        throw new Error(`Unknown logistics type: ${type}`);
    }
  }
}
