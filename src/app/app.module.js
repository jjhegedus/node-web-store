"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var products_component_1 = require("./products/products.component");
var product_details_component_1 = require("./product-details/product-details.component");
var cart_component_1 = require("./cart/cart.component");
var product_service_1 = require("./products/product.service");
var product_image_service_1 = require("./product-details/product-image.service");
var cart_service_1 = require("./cart/cart.service");
var purchase_component_1 = require("./purchase/purchase.component");
var purchase_service_1 = require("./purchase/purchase.service");
var shared_1 = require("./shared");
var app_routing_1 = require("./app.routing");
var config_service_1 = require("./config/config.service");
var hmr_1 = require("@angularclass/hmr");
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        console.log('HMR store', store);
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            products_component_1.ProductsComponent,
            product_details_component_1.ProductDetailsComponent,
            cart_component_1.ShoppingCartComponent,
            purchase_component_1.PurchaseComponent
        ],
        providers: [
            shared_1.ApiService,
            product_service_1.ProductService,
            product_image_service_1.ProductImageService,
            cart_service_1.CartService,
            purchase_service_1.PurchaseService,
            config_service_1.ConfigService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map