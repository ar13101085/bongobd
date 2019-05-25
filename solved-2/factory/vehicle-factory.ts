import Vehicle from "../infrastructure/vehicle";
import Car from "../model/car";
import Plane from "../model/plane";

export default class VehicleFactory{
    public getVehicle(type:string):Vehicle{
        if(type==="CAR"){
            return new Car();
        }else if(type==="Plane"){
            return new Plane();
        }
        return null;
    }
} 