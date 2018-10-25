import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherGallaryComponent } from './other-gallary.component';

describe('OtherGallaryComponent', () => {
  let component: OtherGallaryComponent;
  let fixture: ComponentFixture<OtherGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
