import { Container } from "./container";
export declare class Boat {
    private maxCost;
    private elements;
    private cost;
    private value;
    constructor(maxCost: number, cantElements: number);
    addElement(container: Container): void;
    clear(): void;
    deleteElement(container: Container): void;
    existElement(container: Container): boolean;
    getCost(): number;
    getValue(): number;
    getElements(): Container[];
    getMaxCost(): number;
}
