import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodGallaryComponent } from './food-gallary.component';

describe('FoodGallaryComponent', () => {
  let component: FoodGallaryComponent;
  let fixture: ComponentFixture<FoodGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
