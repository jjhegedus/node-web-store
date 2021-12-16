import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config/config.service';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';
import { ProductImageService } from './product-image.service';
import { ProductImage } from './ProductImage';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'my-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    product: Product;
    awsBucket: string;
    mainImageUrl: string;
    productImages: Observable<ProductImage[]>;
    selectedProductImage: ProductImage;
    private config: any;

    constructor(
        private configService: ConfigService,
        private productService: ProductService,
        private productImageService: ProductImageService,
        private route: ActivatedRoute,
        private location: Location,
        private cartService: CartService
    ) {
        this.configService.getConfig(
            (config) => {
                this.config = config;

                this.awsBucket = this.config.awsBucket;
            });
    }

    ngOnInit() {
        //this.product = { id: '1', name: 'Cell Phone', description: 'Android cell phone', price: "399.99" };
        console.log('ProductSearchComponent:ngOnInit()');
        this.route.params.switchMap((params: Params) =>
            this.productService.getProduct(params['id']))
            .subscribe((product) => {
                this.product = product;
                this.getProductImages();
            });
    }

    goBack(): void {
        this.location.back();
    }


    getProductImages(): void {
        this.productImageService.getProductImages(this.product.id).subscribe(
            productImages => {
                this.productImages = productImages;
                this.selectedProductImage = this.productImages[0];
                this.mainImageUrl = this.awsBucket + this.selectedProductImage.Key;
            }
        );
    }

    onSelectImage(productImage: ProductImage): void {
        this.selectedProductImage = productImage;
        this.mainImageUrl = this.awsBucket + this.selectedProductImage.Key;
    }

    addToCart(product: Product): void {
        this.cartService.add(product);
    }

}
