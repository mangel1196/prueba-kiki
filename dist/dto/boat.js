"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boat = void 0;
var Boat = /** @class */ (function () {
    function Boat(maxCost, cantElements) {
        this.maxCost = maxCost;
        this.elements = [];
        this.cost = 0;
        this.value = 0;
    }
    Boat.prototype.addElement = function (container) {
        this.elements.push(container);
        this.cost += container.cost;
        this.value += container.value;
    };
    Boat.prototype.clear = function () {
        this.elements.length = 0;
        this.cost = 0;
        this.value = 0;
    };
    Boat.prototype.deleteElement = function (container) {
        this.elements = this.elements.filter(function (item) { return item !== container; });
        this.cost -= container.cost;
        this.value -= container.value;
    };
    Boat.prototype.existElement = function (container) {
        return this.elements.find(function (element) { return container === element; }) !== undefined;
    };
    return Boat;
}());
exports.Boat = Boat;
//# sourceMappingURL=boat.js.map