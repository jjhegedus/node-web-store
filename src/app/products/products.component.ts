import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'my-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

    products: Product[];
    selectedProduct: Product;

    constructor(
        private productService: ProductService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        console.log('ProductsComponent:ngOnInit()');
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
            });
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    deleteProducts(product: Product): void {
        this.productService.deleteProduct(product.id).subscribe(
            () => {
                this.products = this.products.filter(p => p !== product);
                if (this.selectedProduct === product) {
                    this.selectedProduct = null;
                }
            });
    }

    gotoDetail(id: string): void {
        this.router.navigate(['/product-details', id]);
    }

}
