import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { ProductService } from './products/product.service';
import { ProductImageService } from './product-details/product-image.service';
import { CartService } from './cart/cart.service';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseService } from './purchase/purchase.service';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { ConfigService } from './config/config.service';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ProductDetailsComponent,
        ShoppingCartComponent,
        PurchaseComponent
    ],
    providers: [
        ApiService,
        ProductService,
        ProductImageService,
        CartService,
        PurchaseService,
        ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store) {
        console.log('HMR store', store);
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
