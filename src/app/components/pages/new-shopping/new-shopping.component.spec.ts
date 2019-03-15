import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShoppingComponent } from './new-shopping.component';

describe('NewShoppingComponent', () => {
  let component: NewShoppingComponent;
  let fixture: ComponentFixture<NewShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
