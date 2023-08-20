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
exports.SelectContainersRequest = void 0;
var class_validator_1 = require("class-validator");
var SelectContainersRequest = exports.SelectContainersRequest = /** @class */ (function () {
    function SelectContainersRequest() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], SelectContainersRequest.prototype, "budget", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], SelectContainersRequest.prototype, "containers", void 0);
    return SelectContainersRequest;
}());
//# sourceMappingURL=select.container.request.js.map