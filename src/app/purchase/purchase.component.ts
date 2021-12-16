import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
//import { Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

//import { Product } from '../products/product';
//import { CartItem } from '../cart/cart-item';
import { CartService } from '../cart/cart.service';
import { PurchaseInfo } from './PurchaseInfo';
import { PurchaseService } from './purchase.service';

@Component({
    selector: 'my-cart',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})

export class PurchaseComponent implements OnInit {
    purchaseInfo: PurchaseInfo = new PurchaseInfo();

    constructor(
        private cartService: CartService,
        private location: Location,
        private purchaseService: PurchaseService
    ) {
    }

    ngOnInit() {
        this.purchaseInfo.cartItems = this.cartService.get();
        this.purchaseInfo.ccnumber = '4242424242424242';
        this.purchaseInfo.nameoncard = 'TestAccount';
        this.purchaseInfo.ccexpmonth = 11;
        this.purchaseInfo.ccexpyear = 2019;
        this.purchaseInfo.ccv2 = '223';
        this.purchaseInfo.grandTotal = this.cartService.getGrandTotal();
    }

    goBack(): void {
        this.location.back();
    }

    getCreditCardToken(): void {
        this.purchaseService.getCreditCardToken(this.purchaseInfo).subscribe(
            (next) => {
                console.log('next = ' + JSON.stringify(next));
                this.purchaseInfo.cardToken = next.id;
                this.purchaseService.createCharge(this.purchaseInfo).subscribe(
                    (next) => {
                        console.log('purchase.component.ts:getCreditCardToken next = ' + next);
                        //console.log('purchase.component.ts:getCreditCardToken next = ' + next());
                    },
                    (err) => {
                        console.log('create charge err = ' + err);
                    },
                    () => {
                        console.log('create charge completed');
                        this.cartService.clear();
                        this.purchaseInfo.cardToken = null;
                        window.location.href = '/products';
                    }
                );
            },
            (err) => {
                console.log('err = ' + JSON.stringify(err));
            },
            () => {
                console.log('completing');
            }
        );
    }
}
