"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
var ConfigService = /** @class */ (function () {
    function ConfigService(env) {
        this.env = env;
    }
    ConfigService.prototype.getValue = function (key, throwOnMissing) {
        if (throwOnMissing === void 0) { throwOnMissing = true; }
        var value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error("config error - missing env.".concat(key));
        }
        return value;
    };
    ConfigService.prototype.ensureValues = function (keys) {
        var _this = this;
        keys.forEach(function (k) { return _this.getValue(k, true); });
        return this;
    };
    ConfigService.prototype.getPort = function () {
        return this.getValue('PORT', true);
    };
    ConfigService.prototype.isProduction = function () {
        var mode = this.getValue('MODE', false);
        return mode != 'DEV';
    };
    ConfigService.prototype.getTypeOrmConfig = function () {
        var databasedata = {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: ['dist/**/*.entity.js'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            ssl: this.isProduction(),
        };
        console.log(databasedata);
        return databasedata;
    };
    return ConfigService;
}());
var configService = new ConfigService(process.env)
    .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map