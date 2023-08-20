"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "kiki_prueba",
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map