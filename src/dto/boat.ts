import { Container } from "./container";

export class Boat{
    private maxCost: number;
    private elements: Container[];

    private cost: number;
    private value: number;

    constructor(maxCost: number, cantElements: number){

        this.maxCost = maxCost;
        this.elements = new Container[cantElements];
        this.cost = 0;
        this.value = 0;
    }

    addElement(container: Container){
        this.elements.push(container);   
        this.cost += container.getCost();
        this.value += container.getValue();
    }

    clear(){
        this.elements.length = 0;
        this.cost = 0;
        this.value = 0;
    }

    deleteElement(container: Container){
        this.elements = this.elements.filter(item => item !== container);
        this.cost -= container.getCost();
        this.value -= container.getValue();
    }

    existElement(container: Container) : boolean{
        return this.elements.find((element) => container === element) !== undefined;
    }

    getCost():number{
        return this.cost;
    }

    getValue():number{
        return this.value;
    }

    getElements():Container[]{
        return this.elements;
    }

    getMaxCost():number{
        return this.maxCost;
    }
}