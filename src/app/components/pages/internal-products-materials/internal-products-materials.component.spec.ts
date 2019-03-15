import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalProductsMaterialsComponent } from './internal-products-materials.component';

describe('InternalProductsMaterialsComponent', () => {
  let component: InternalProductsMaterialsComponent;
  let fixture: ComponentFixture<InternalProductsMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalProductsMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalProductsMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
