"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerService = void 0;
const boat_1 = require("../dto/boat");
class ContainerService {
    selectContainers(maxLoad, containers) {
        let boat = new boat_1.Boat(maxLoad, containers.length);
        let boatOpt = new boat_1.Boat(maxLoad, containers.length);
        this.fillBoat(boat, containers, false, boatOpt);
        return boatOpt.getElements().map(element => element.getName()).join(", ");
    }
    fillBoat(boat, containers, full, boatOpt) {
        if (full) {
            if (boat.getValue() > boatOpt.getValue()) {
                let elementsBoatBase = boat.getElements();
                boatOpt.clear();
                elementsBoatBase.forEach(elementBoatBase => {
                    boatOpt.addElement(elementBoatBase);
                });
            }
        }
        else {
            for (let container of containers) {
                if (!boat.existElement(container)) {
                    if (boat.getMaxCost() > boat.getCost() + container.getCost()) {
                        boat.addElement(container);
                        this.fillBoat(boat, containers, false, boatOpt);
                        boat.deleteElement(container);
                    }
                    else {
                        this.fillBoat(boat, containers, true, boatOpt);
                    }
                }
            }
        }
    }
}
exports.ContainerService = ContainerService;
//# sourceMappingURL=container.service.js.map