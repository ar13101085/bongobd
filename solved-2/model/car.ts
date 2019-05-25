import Vehicle from "../infrastructure/vehicle";

export default class Car implements Vehicle{
    
    set_num_of_wheels(): number {
        return 4;
    }   
    
    set_num_of_passengers(): number {
       return 4;
    }

    has_gas(): boolean {
        return true;
    }


}