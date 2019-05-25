"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = __importDefault(require("../model/car"));
var plane_1 = __importDefault(require("../model/plane"));
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.getVehicle = function (type) {
        if (type === "CAR") {
            return new car_1.default();
        }
        else if (type === "Plane") {
            return new plane_1.default();
        }
        return null;
    };
    return VehicleFactory;
}());
exports.default = VehicleFactory;
//# sourceMappingURL=vehicle-factory.js.map