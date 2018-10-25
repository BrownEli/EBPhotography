import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoverSlideshowComponent } from './home-cover-slideshow.component';

describe('HomeCoverSlideshowComponent', () => {
  let component: HomeCoverSlideshowComponent;
  let fixture: ComponentFixture<HomeCoverSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCoverSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoverSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
