import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionHomeComponent } from './production-home.component';

describe('ProductionHomeComponent', () => {
  let component: ProductionHomeComponent;
  let fixture: ComponentFixture<ProductionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
