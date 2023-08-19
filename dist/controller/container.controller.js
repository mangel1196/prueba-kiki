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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const container_service_1 = require("../service/container.service");
let ContainerController = exports.ContainerController = class ContainerController {
    constructor(containerService) {
        this.containerService = containerService;
    }
    selectContainersFromJSON(request) {
        const { budget, containers } = request;
        return this.containerService.selectContainers(budget, containers);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Seleccionar contenedores dentro de un presupuesto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Nombres de contenedores seleccionados', type: [String] }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Parámetros inválidos' }),
    (0, common_1.Post)('select'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SelectContainersRequest]),
    __metadata("design:returntype", String)
], ContainerController.prototype, "selectContainersFromJSON", null);
exports.ContainerController = ContainerController = __decorate([
    (0, swagger_1.ApiTags)('knapsack'),
    (0, common_1.Controller)('containers'),
    __metadata("design:paramtypes", [container_service_1.ContainerService])
], ContainerController);
class SelectContainersRequest {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SelectContainersRequest.prototype, "budget", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], SelectContainersRequest.prototype, "containers", void 0);
//# sourceMappingURL=container.controller.js.map