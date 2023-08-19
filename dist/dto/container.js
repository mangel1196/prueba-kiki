"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    getName() {
        return this.name;
    }
    getCost() {
        return this.cost;
    }
    getValue() {
        return this.value;
    }
    constructor(name, cost, value) {
        this.name = name;
        this.cost = cost;
        this.value = value;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map