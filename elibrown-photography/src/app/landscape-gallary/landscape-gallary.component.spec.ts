import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeGallaryComponent } from './landscape-gallary.component';

describe('LandscapeGallaryComponent', () => {
  let component: LandscapeGallaryComponent;
  let fixture: ComponentFixture<LandscapeGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandscapeGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
