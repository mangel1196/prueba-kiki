import { Injectable } from "@nestjs/common";
import { Boat } from "../dto/boat";
import { Container } from '../dto/container';

@Injectable()
export class ContainerService {

  selectContainers(maxLoad: number, containers: Container[]): string{

   let boat:Boat = new Boat(maxLoad, containers.length);
   let boatOpt:Boat = new Boat(maxLoad, containers.length);

   this.fillBoat(boat, containers, false, boatOpt);
 
     return boatOpt.getElements().map(element => element.getName()).join(", ");
  }

  fillBoat(boat: Boat, containers: Container[], full:boolean, boatOpt: Boat){

    if(full){
      if(boat.getValue() > boatOpt.getValue()){ 
        
         let elementsBoatBase:Container[] = boat.getElements();
        boatOpt.clear(); 
        elementsBoatBase.forEach(elementBoatBase => {
          boatOpt.addElement(elementBoatBase);
        }); 
      } 
    }else{

      for (let container of containers) { 
          
         if(!boat.existElement(container)){
            
            if(boat.getMaxCost() > boat.getCost() + container.getCost()){
               boat.addElement(container);
               this.fillBoat(boat,containers, false, boatOpt);
               boat.deleteElement(container)
            }else{
               this.fillBoat(boat,containers, true, boatOpt);
            }
          } 
      } 
    } 
  }
}
 