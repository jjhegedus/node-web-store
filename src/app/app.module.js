"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var hmr_1 = require("@angularclass/hmr");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var config_service_1 = require("./config/config.service");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var products_component_1 = require("./products/products.component");
var product_details_component_1 = require("./product-details/product-details.component");
var product_service_1 = require("./products/product.service");
var product_image_service_1 = require("./product-details/product-image.service");
var _22ndtech_angular_lib_1 = require("22ndtech-angular-lib");
var _22ndtech_angular_lib_2 = require("22ndtech-angular-lib");
var shared_1 = require("./shared");
var app_routing_1 = require("./app.routing");
var _22ndtech_angular_lib_3 = require("22ndtech-angular-lib");
var _22ndtech_angular_lib_4 = require("22ndtech-angular-lib");
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
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                _22ndtech_angular_lib_4.LibModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                products_component_1.ProductsComponent,
                product_details_component_1.ProductDetailsComponent
            ],
            providers: [
                config_service_1.ConfigService,
                shared_1.ApiService,
                product_service_1.ProductService,
                product_image_service_1.ProductImageService,
                _22ndtech_angular_lib_1.CartService,
                _22ndtech_angular_lib_2.CheckoutService,
                _22ndtech_angular_lib_3.SalesTaxService
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [core_1.ApplicationRef])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map