import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ConfigService } from './config/config.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './products/product.service';
import { ProductImageService } from './product-details/product-image.service';
import { CartService } from '22ndtech-angular-lib';
import { CheckoutService } from '22ndtech-angular-lib';
import { ApiService } from './shared';
import { routing } from './app.routing';
import {SalesTaxService} from '22ndtech-angular-lib';
import {LibModule} from '22ndtech-angular-lib';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        LibModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ProductDetailsComponent
    ],
    providers: [
        ConfigService,
        ApiService,
        ProductService,
        ProductImageService,
        CartService,
        CheckoutService,
        SalesTaxService
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
