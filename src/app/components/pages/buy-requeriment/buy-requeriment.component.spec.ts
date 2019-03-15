import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRequerimentComponent } from './buy-requeriment.component';

describe('BuyRequerimentComponent', () => {
  let component: BuyRequerimentComponent;
  let fixture: ComponentFixture<BuyRequerimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyRequerimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyRequerimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
