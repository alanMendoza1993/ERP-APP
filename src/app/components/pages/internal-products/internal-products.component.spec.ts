import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalProductsComponent } from './internal-products.component';

describe('InternalProductsComponent', () => {
  let component: InternalProductsComponent;
  let fixture: ComponentFixture<InternalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
