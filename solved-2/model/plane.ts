import Vehicle from "../infrastructure/vehicle";

export default class Plane implements Vehicle{
    
    set_num_of_wheels(): number {
        return 3;
    }   
    
    set_num_of_passengers(): number {
       return 50;
    }

    has_gas(): boolean {
        return false;
    }

}