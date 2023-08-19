"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boat = void 0;
class Boat {
    constructor(maxCost, cantElements) {
        this.maxCost = maxCost;
        this.elements = [];
        this.cost = 0;
        this.value = 0;
    }
    addElement(container) {
        this.elements.push(container);
        this.cost += container.getCost();
        this.value += container.getValue();
    }
    clear() {
        this.elements.length = 0;
        this.cost = 0;
        this.value = 0;
    }
    deleteElement(container) {
        this.elements = this.elements.filter(item => item !== container);
        this.cost -= container.getCost();
        this.value -= container.getValue();
    }
    existElement(container) {
        return this.elements.find((element) => container === element) !== undefined;
    }
    getCost() {
        return this.cost;
    }
    getValue() {
        return this.value;
    }
    getElements() {
        return this.elements;
    }
    getMaxCost() {
        return this.maxCost;
    }
}
exports.Boat = Boat;
//# sourceMappingURL=boat.js.map