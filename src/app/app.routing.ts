import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'purchase', component: PurchaseComponent }
];

export const routing = RouterModule.forRoot(routes);
