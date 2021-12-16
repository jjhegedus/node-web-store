"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var products_component_1 = require("./products/products.component");
var product_details_component_1 = require("./product-details/product-details.component");
var _22ndtech_angular_lib_1 = require("22ndtech-angular-lib");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'product-details/:id', component: product_details_component_1.ProductDetailsComponent },
    { path: 'cart', component: _22ndtech_angular_lib_1.CartComponent },
    { path: 'checkout', component: _22ndtech_angular_lib_1.CheckoutComponent },
    { path: 'order-summary', component: _22ndtech_angular_lib_1.OrderSummaryComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map