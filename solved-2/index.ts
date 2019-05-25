/**********Solution a ****** */

import VehicleFactory from "./factory/vehicle-factory";
import Car from "./model/car";

let factory:VehicleFactory=new VehicleFactory();

let car:Car=factory.getVehicle("CAR");

console.log(car.set_num_of_passengers())

/**********Solution b ****** */

