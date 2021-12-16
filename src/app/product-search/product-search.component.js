"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductSearchComponent = (function () {
    function ProductSearchComponent() {
        // Do stuff
        console.log('product-search.components.ts: ProductSearchComponent.constructor');
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        console.log('ProductSearchComponent:ngOnInit()');
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            selector: 'product-search',
            templateUrl: './product-search.component.html',
            styleUrls: ['./product-search.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map