"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_service_1 = require("../config/config.service");
var fs = require("fs");
fs.writeFileSync('ormconfig.json', JSON.stringify(config_service_1.configService.getTypeOrmConfig(), null, 2));
//# sourceMappingURL=write-type-orm-config.js.map