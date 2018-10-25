import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitGallaryComponent } from './portrait-gallary.component';

describe('PortraitGallaryComponent', () => {
  let component: PortraitGallaryComponent;
  let fixture: ComponentFixture<PortraitGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
