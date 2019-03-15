import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderProductsComponent } from './provider-products.component';

describe('ProviderProductsComponent', () => {
  let component: ProviderProductsComponent;
  let fixture: ComponentFixture<ProviderProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
