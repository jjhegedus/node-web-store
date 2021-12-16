import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  constructor() {
    // Do stuff
      console.log('product-search.components.ts: ProductSearchComponent.constructor');
  }

  ngOnInit() {
    console.log('ProductSearchComponent:ngOnInit()');
  }

}
