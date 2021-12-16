import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from './shared';

import '../style/app.scss';

import { ConfigService, CartService, ContextService, ProductCategory, ProductCategoriesService } from '22ndtech-angular-lib';

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title: string;
    private config: any;
    private currentPage: string = 'undefined';
    productCategories: ProductCategory[];
    private selectedCategory: BehaviorSubject<string> = new BehaviorSubject<string>('undefined');
    private component: any;
    categoryChanges: Observable<string>;
    categorySelectElement: HTMLSelectElement;
    categorySelectElementChanges: Observable<string>;

    constructor(
        private configService: ConfigService,
        private cartService: CartService,
        private api: ApiService,
        private contextService: ContextService,
        private productCategoriesService: ProductCategoriesService
    ) {
        console.log(this.cartService);
        this.title = this.api.title;
        this.configService.getConfig((configuration: any) => {
          this.config = configuration;
        });
    }

    

  ngOnInit() {
    this.getProductCategories();

    this.categorySelectElement = <HTMLSelectElement>document.getElementById('categorySelect');

    this.categorySelectElementChanges = Observable.fromEvent(
      this.categorySelectElement, 'change'
    );
    
    this.categorySelectElementChanges.subscribe(
      event => this.onSelectedElementChange(event));

  }

  onSelectedElementChange(event: any){  
    // this.selectedCategory = this.categorySelectElement.options[this.categorySelectElement.selectedIndex].value;
    
    // this.contextService.setSelectedCategory(this.selectedCategory);

    this.selectedCategory.next(event.target.value);
    this.contextService.setSelectedCategory(event.target.value);
  }

  getProductCategories(): void {
    this.productCategoriesService.getProductCategories().subscribe(
      productCategories => {
        this.productCategories = productCategories;
      });
  }


  componentAdded(component: any) {
    this.currentPage = component.pageName ? component.pageName : 'undefined';
    this.component = component;
    console.log(this.component);
  }

  componentRemoved() {
    this.currentPage = 'undefined';
    this.component = null;
    console.log('component is null');
  }

}
