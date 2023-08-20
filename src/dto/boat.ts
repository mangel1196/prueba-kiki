import { Container } from "./container";

export class Boat{
    maxCost: number;
    elements: Container[];

    cost: number;
    value: number;

    constructor(maxCost: number, cantElements: number){

        this.maxCost = maxCost;
        this.elements = [];
        this.cost = 0;
        this.value = 0;
    }

    addElement(container: Container){
        this.elements.push(container);   
        this.cost += container.cost;
        this.value += container.value;
    }

    clear(){
        this.elements.length = 0;
        this.cost = 0;
        this.value = 0;
    }

    deleteElement(container: Container){
        this.elements = this.elements.filter(item => item !== container);
        this.cost -= container.cost;
        this.value -= container.value;
    }

    existElement(container: Container) : boolean{
        return this.elements.find((element) => container === element) !== undefined;
    } 
}