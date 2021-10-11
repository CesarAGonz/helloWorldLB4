"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Products = class Products extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "id", void 0);
Products = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Products);
exports.Products = Products;
//# sourceMappingURL=products.model.js.map