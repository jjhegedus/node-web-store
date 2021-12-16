import { TestBed } from '@angular/core/testing';

import { ProductSearchComponent } from './product-search.component';

describe('Product Search Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [ProductSearchComponent] });
    });

    it('should ...', () => {
        const fixture = TestBed.createComponent(ProductSearchComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('Product Search Component');
    });

});
