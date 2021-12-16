"use strict";
var core_1 = require("@angular/core");
var cart_service_js_1 = require("./cart.service.js");
var AddCartComponent = (function () {
    function AddCartComponent(_shoppingCartService) {
        this._shoppingCartService = _shoppingCartService;
    }
    AddCartComponent.prototype.addToCart = function (product) {
        this._shoppingCartService.add(product);
    };
    return AddCartComponent;
}());
AddCartComponent = __decorate([
    core_1.Component({
        selector: 'add-cart',
        template: "<button (click)=\"addToCart(product)\">Add to Cart</button>",
        inputs: ['product']
    }),
    __metadata("design:paramtypes", [cart_service_js_1.CartService])
], AddCartComponent);
exports.AddCartComponent = AddCartComponent;
//# sourceMappingURL=cart-button.component.js.map