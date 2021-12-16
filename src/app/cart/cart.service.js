"use strict";
var core_1 = require("@angular/core");
var cart_item_1 = require("../cart/cart-item");
var CartService = (function () {
    function CartService() {
        this.cartItems = [];
    }
    CartService.prototype.add = function (product) {
        var cartItem = this.cartItems.find(function (cartItem) {
            return cartItem.product == product;
        });
        if (cartItem) {
            cartItem.quantity++;
        }
        else {
            cartItem = new cart_item_1.CartItem();
            cartItem.product = product;
            cartItem.quantity = 1;
            cartItem.index = this.cartItems.length;
            this.cartItems.push(cartItem);
        }
    };
    CartService.prototype.remove = function (index) {
        if (index > -1) {
            var cartItem = this.cartItems[index];
            if (cartItem.quantity == 1) {
                this.cartItems.splice(index, 1);
            }
            else {
                cartItem.quantity--;
            }
        }
    };
    CartService.prototype.clear = function () {
        this.cartItems = [];
    };
    CartService.prototype.get = function () {
        return this.cartItems;
    };
    CartService.prototype.getGrandTotal = function () {
        var grandTotal = 0;
        for (var index = 0; index < this.cartItems.length; index++) {
            grandTotal += this.cartItems[index].quantity * parseFloat(this.cartItems[index].product.price);
        }
        return grandTotal;
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map