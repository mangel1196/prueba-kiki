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
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var select_container_request_1 = require("../dto/request/select.container.request");
var container_service_1 = require("../service/container.service");
var ContainerController = exports.ContainerController = /** @class */ (function () {
    function ContainerController(containerService) {
        this.containerService = containerService;
    }
    ContainerController.prototype.selectContainersFromJSON = function (request) {
        var budget = request.budget, containers = request.containers;
        return this.containerService.selectContainers(budget, containers).map(function (element) { return element.name; }).join(", ");
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Seleccionar contenedores dentro de un presupuesto' }),
        (0, swagger_1.ApiResponse)({ status: 200, description: 'Nombres de contenedores seleccionados', type: [String] }),
        (0, swagger_1.ApiBadRequestResponse)({ description: 'Parámetros inválidos' }),
        (0, common_1.Post)('select'),
        __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [select_container_request_1.SelectContainersRequest]),
        __metadata("design:returntype", String)
    ], ContainerController.prototype, "selectContainersFromJSON", null);
    ContainerController = __decorate([
        (0, swagger_1.ApiTags)('knapsack'),
        (0, common_1.Controller)('containers'),
        __metadata("design:paramtypes", [container_service_1.ContainerService])
    ], ContainerController);
    return ContainerController;
}());
//# sourceMappingURL=container.controller.js.map