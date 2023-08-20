"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var container_controller_1 = require("./controller/container.controller");
var container_service_1 = require("./service/container.service");
var typeorm_1 = require("@nestjs/typeorm");
var Requests_1 = require("./entity/Requests");
var AppModule = exports.AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5342,
                    username: 'admin',
                    password: 'admin',
                    database: 'kiki_prueba',
                    entities: [Requests_1.Requests],
                    synchronize: false,
                    logging: true,
                }),
                typeorm_1.TypeOrmModule.forFeature([Requests_1.Requests])
            ],
            controllers: [app_controller_1.AppController, container_controller_1.ContainerController],
            providers: [app_service_1.AppService, container_service_1.ContainerService],
        })
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map