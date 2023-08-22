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
exports.ContainerService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var Requests_1 = require("../entity/Requests");
var typeorm_2 = require("typeorm");
var ContainerService = exports.ContainerService = /** @class */ (function () {
    function ContainerService(repository) {
        this.repository = repository;
    }
    ContainerService.prototype.saveMetric = function (selectedContainers, budget) {
        var request = new Requests_1.Requests();
        request.initialBudget = budget;
        request.aprovedBudget = selectedContainers.map(function (element) { return element.cost; }).reduce(function (valorAnterior, valorActual, indice, vector) { return valorAnterior + valorActual; });
        return this.repository.save(request);
    };
    ContainerService.prototype.getStats = function () {
        var requests;
        this.repository.find().then(function (elements) { return requests = elements; });
        var total = requests.map(function (element) { return element.initialBudget; }).reduce(function (valorAnterior, valorActual, indice, vector) { return valorAnterior + valorActual; });
        var aproved = requests.map(function (element) { return element.aprovedBudget; }).reduce(function (valorAnterior, valorActual, indice, vector) { return valorAnterior + valorActual; });
        return {
            "total_budget": total,
            "approved_budget": aproved,
            "rejected_budget": total - aproved
        };
    };
    ContainerService.prototype.selectContainers = function (budget, containers) {
        var n = containers.length;
        var dp = Array.from({ length: n + 1 }, function () { return Array(budget + 1).fill(0); });
        for (var i = 1; i <= n; i++) {
            var container = containers[i - 1];
            for (var j_1 = 0; j_1 <= budget; j_1++) {
                if (container.cost <= j_1) {
                    dp[i][j_1] = Math.max(dp[i - 1][j_1], container.value + dp[i - 1][j_1 - container.cost]);
                }
                else {
                    dp[i][j_1] = dp[i - 1][j_1];
                }
            }
        }
        var selectedContainers = [];
        var j = budget;
        for (var i = n; i > 0 && j > 0; i--) {
            if (dp[i][j] !== dp[i - 1][j]) {
                selectedContainers.push(containers[i - 1]);
                j -= containers[i - 1].cost;
            }
        }
        common_1.Logger.log("asdasdasdas");
        console.log(this.saveMetric(selectedContainers, budget));
        return selectedContainers;
    };
    ContainerService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(Requests_1.Requests)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], ContainerService);
    return ContainerService;
}());
//# sourceMappingURL=container.service.js.map