import { Injectable } from '@angular/core';

import { Product } from '../products/product';
import { CartItem } from '../cart/cart-item';

@Injectable()
export class CartService {

    cartItems: CartItem[];

    constructor() {

        this.cartItems = [];

    }

    add(product: Product) {
        let cartItem = this.cartItems.find((cartItem) => {
            return cartItem.product == product;
        });

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cartItem = new CartItem();
            cartItem.product = product;
            cartItem.quantity = 1;
            cartItem.index = this.cartItems.length;
            this.cartItems.push(cartItem);
        }
    }

    remove(index: number) {

        if (index > -1) {
            let cartItem = this.cartItems[index];

            if (cartItem.quantity == 1) {
                this.cartItems.splice(index, 1);
            } else {
                cartItem.quantity--;
            }
        }

    }

    clear() {

        this.cartItems = [];

    }

    get() {
        return this.cartItems;

    }

    getGrandTotal() {
        let grandTotal = 0;
        for (var index = 0; index < this.cartItems.length; index++) {
            grandTotal += this.cartItems[index].quantity * parseFloat(this.cartItems[index].product.price);
        }

        return grandTotal;
    }

    numberOfItems() {
        let count = 0;

        for (let item of this.cartItems) {
            count += item.quantity;
        }

        return count;
    }

}