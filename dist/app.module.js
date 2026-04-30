"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_module_1 = require("./categories/categories.module");
const products_module_1 = require("./products/products.module");
const category_entity_1 = require("./categories/category.entity");
const product_entity_1 = require("./products/product.entity");
const _1712610869345_CreateTables_1 = require("./migrations/1712610869345-CreateTables");
const _1775682852295_AddIsActiveToProducts_1 = require("./migrations/1775682852295-AddIsActiveToProducts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '5432'),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [category_entity_1.Category, product_entity_1.Product],
                migrations: [_1712610869345_CreateTables_1.CreateTables1712610869345, _1775682852295_AddIsActiveToProducts_1.AddIsActiveToProducts1775682852295],
                synchronize: false,
                logging: true,
            }),
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map