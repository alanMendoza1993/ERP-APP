import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PNotFoundComponent } from './p-not-found.component';

describe('PNotFoundComponent', () => {
  let component: PNotFoundComponent;
  let fixture: ComponentFixture<PNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
