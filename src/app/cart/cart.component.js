"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var cart_service_1 = require("./cart.service");
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingCartService, location, router) {
        this.shoppingCartService = shoppingCartService;
        this.location = location;
        this.router = router;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.shoppingCartService.get();
        this.cartGrandTotal = this.shoppingCartService.getGrandTotal();
    };
    ShoppingCartComponent.prototype.removeProduct = function (index) {
        this.shoppingCartService.remove(index);
        this.cartItems = this.shoppingCartService.get();
        this.cartGrandTotal = this.shoppingCartService.getGrandTotal();
    };
    ShoppingCartComponent.prototype.goBack = function () {
        this.location.back();
    };
    ShoppingCartComponent.prototype.purchase = function () {
        this.router.navigate(['/purchase']);
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    core_1.Component({
        selector: 'my-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss']
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        common_1.Location,
        router_1.Router])
], ShoppingCartComponent);
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=cart.component.js.map