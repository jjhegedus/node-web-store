import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

//import { Product } from '../products/product';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
    cartItems: CartItem[];
    cartGrandTotal: number;

    constructor(
        private shoppingCartService: CartService,
        private location: Location,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.cartItems = this.shoppingCartService.get();
        this.cartGrandTotal = this.shoppingCartService.getGrandTotal();
    }

    removeProduct(index: number) {
        this.shoppingCartService.remove(index);
        this.cartItems = this.shoppingCartService.get();
        this.cartGrandTotal = this.shoppingCartService.getGrandTotal();
    }

    goBack(): void {
        this.location.back();
    }

    purchase(): void {
        this.router.navigate(['/purchase']);
    }
}
