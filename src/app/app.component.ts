import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

import { CartService } from './cart/cart.service';

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    url = 'http://AllProductsGoneViral.com';
    title: string;

    constructor(
        private api: ApiService,
        private cartService: CartService
    ) {
        this.title = this.api.title;
        console.log(this.cartService);
    }

}
