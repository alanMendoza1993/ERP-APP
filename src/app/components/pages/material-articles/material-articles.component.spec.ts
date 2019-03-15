import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialArticlesComponent } from './material-articles.component';

describe('MaterialArticlesComponent', () => {
  let component: MaterialArticlesComponent;
  let fixture: ComponentFixture<MaterialArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
