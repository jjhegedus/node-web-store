"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var config_service_1 = require("../config/config.service");
var product_service_1 = require("../products/product.service");
var product_image_service_1 = require("./product-image.service");
var _22ndtech_angular_lib_1 = require("22ndtech-angular-lib");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(configService, productService, productImageService, route, location, cartService) {
        var _this = this;
        this.configService = configService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.route = route;
        this.location = location;
        this.cartService = cartService;
        this.configService.getConfig(function (config) {
            _this.config = config;
            _this.awsBucket = _this.config.awsBucket;
        });
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.product = { id: '1', name: 'Cell Phone', description: 'Android cell phone', price: "399.99" };
        console.log('ProductSearchComponent:ngOnInit()');
        this.route.params.switchMap(function (params) {
            return _this.productService.getProduct(params['id']);
        })
            .subscribe(function (product) {
            _this.product = product;
            _this.getProductImages();
        });
    };
    ProductDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailsComponent.prototype.getProductImages = function () {
        var _this = this;
        this.productImageService.getProductImages(this.product.id).subscribe(function (productImages) {
            _this.productImages = productImages;
            _this.selectedProductImage = _this.productImages[0];
            _this.mainImageUrl = _this.awsBucket + _this.selectedProductImage.Key;
        });
    };
    ProductDetailsComponent.prototype.onSelectImage = function (productImage) {
        this.selectedProductImage = productImage;
        this.mainImageUrl = this.awsBucket + this.selectedProductImage.Key;
    };
    ProductDetailsComponent.prototype.addToCart = function (product) {
        this.cartService.add(product);
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
        }),
        __metadata("design:paramtypes", [config_service_1.ConfigService,
            product_service_1.ProductService,
            product_image_service_1.ProductImageService,
            router_1.ActivatedRoute,
            common_1.Location,
            _22ndtech_angular_lib_1.CartService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map