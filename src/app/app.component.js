"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var shared_1 = require("./shared");
require("../style/app.scss");
var _22ndtech_angular_lib_1 = require("22ndtech-angular-lib");
var AppComponent = (function () {
    function AppComponent(configService, cartService, api, contextService, productCategoriesService) {
        var _this = this;
        this.configService = configService;
        this.cartService = cartService;
        this.api = api;
        this.contextService = contextService;
        this.productCategoriesService = productCategoriesService;
        this.currentPage = 'undefined';
        this.selectedCategory = new BehaviorSubject_1.BehaviorSubject('undefined');
        console.log(this.cartService);
        this.title = this.api.title;
        this.configService.getConfig(function (configuration) {
            _this.config = configuration;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductCategories();
        this.categorySelectElement = document.getElementById('categorySelect');
        this.categorySelectElementChanges = Rx_1.Observable.fromEvent(this.categorySelectElement, 'change');
        this.categorySelectElementChanges.subscribe(function (event) { return _this.onSelectedElementChange(event); });
    };
    AppComponent.prototype.onSelectedElementChange = function (event) {
        // this.selectedCategory = this.categorySelectElement.options[this.categorySelectElement.selectedIndex].value;
        // this.contextService.setSelectedCategory(this.selectedCategory);
        this.selectedCategory.next(event.target.value);
        this.contextService.setSelectedCategory(event.target.value);
    };
    AppComponent.prototype.getProductCategories = function () {
        var _this = this;
        this.productCategoriesService.getProductCategories().subscribe(function (productCategories) {
            _this.productCategories = productCategories;
        });
    };
    AppComponent.prototype.componentAdded = function (component) {
        this.currentPage = component.pageName ? component.pageName : 'undefined';
        this.component = component;
        console.log(this.component);
    };
    AppComponent.prototype.componentRemoved = function () {
        this.currentPage = 'undefined';
        this.component = null;
        console.log('component is null');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
        }),
        __metadata("design:paramtypes", [_22ndtech_angular_lib_1.ConfigService,
            _22ndtech_angular_lib_1.CartService,
            shared_1.ApiService,
            _22ndtech_angular_lib_1.ContextService,
            _22ndtech_angular_lib_1.ProductCategoriesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map