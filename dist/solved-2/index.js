"use strict";
/**********Solution a ****** */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vehicle_factory_1 = __importDefault(require("./factory/vehicle-factory"));
var factory = new vehicle_factory_1.default();
var car = factory.getVehicle("CAR");
console.log(car.set_num_of_passengers());
/**********Solution b ****** */
//# sourceMappingURL=index.js.map