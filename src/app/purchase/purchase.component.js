"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';
//import { Product } from '../products/product';
//import { CartItem } from '../cart/cart-item';
var cart_service_1 = require("../cart/cart.service");
var PurchaseInfo_1 = require("./PurchaseInfo");
var purchase_service_1 = require("./purchase.service");
var PurchaseComponent = (function () {
    function PurchaseComponent(cartService, location, purchaseService) {
        this.cartService = cartService;
        this.location = location;
        this.purchaseService = purchaseService;
        this.purchaseInfo = new PurchaseInfo_1.PurchaseInfo();
    }
    PurchaseComponent.prototype.ngOnInit = function () {
        this.purchaseInfo.cartItems = this.cartService.get();
        this.purchaseInfo.ccnumber = '4242424242424242';
        this.purchaseInfo.nameoncard = 'TestAccount';
        this.purchaseInfo.ccexpmonth = 11;
        this.purchaseInfo.ccexpyear = 2019;
        this.purchaseInfo.ccv2 = '223';
        this.purchaseInfo.grandTotal = this.cartService.getGrandTotal();
    };
    PurchaseComponent.prototype.goBack = function () {
        this.location.back();
    };
    PurchaseComponent.prototype.getCreditCardToken = function () {
        var _this = this;
        this.purchaseService.getCreditCardToken(this.purchaseInfo).subscribe(function (next) {
            console.log('next = ' + JSON.stringify(next));
            _this.purchaseInfo.cardToken = next.id;
            _this.purchaseService.createCharge(_this.purchaseInfo).subscribe(function (next) {
                console.log('purchase.component.ts:getCreditCardToken next = ' + next);
                //console.log('purchase.component.ts:getCreditCardToken next = ' + next());
                _this.cartService.clear();
            }, function (err) {
                console.log('create charge err = ' + err);
            }, function () {
                console.log('create charge completed');
                _this.purchaseInfo.cardToken = null;
            });
        }, function (err) {
            console.log('err = ' + JSON.stringify(err));
        }, function () {
            console.log('completing');
        });
    };
    return PurchaseComponent;
}());
PurchaseComponent = __decorate([
    core_1.Component({
        selector: 'my-cart',
        templateUrl: './purchase.component.html',
        styleUrls: ['./purchase.component.scss']
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        common_1.Location,
        purchase_service_1.PurchaseService])
], PurchaseComponent);
exports.PurchaseComponent = PurchaseComponent;
//# sourceMappingURL=purchase.component.js.map