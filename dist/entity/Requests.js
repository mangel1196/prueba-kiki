"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requests = void 0;
var typeorm_1 = require("typeorm");
var Requests = exports.Requests = /** @class */ (function () {
    function Requests() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Requests.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'integer', name: "initial_budget" }),
        __metadata("design:type", Number)
    ], Requests.prototype, "initialBudget", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'integer', name: "aproved_budget" }),
        __metadata("design:type", Number)
    ], Requests.prototype, "aprovedBudget", void 0);
    Requests = __decorate([
        (0, typeorm_1.Entity)({ name: 'requests' })
    ], Requests);
    return Requests;
}());
//# sourceMappingURL=Requests.js.map