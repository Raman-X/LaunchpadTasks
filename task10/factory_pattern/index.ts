import { LogisticsFactory } from "./LogisticsFactory";

try {
  const seaTransport = LogisticsFactory.createLogistics("Sea Logistic");
  const airTransport = LogisticsFactory.createLogistics("Air Logistic");
  const landTransport = LogisticsFactory.createLogistics("Land Logistic");

  seaTransport.drive();
  airTransport.drive();
  landTransport.drive();
} catch (error) {
  console.error(error);
}
