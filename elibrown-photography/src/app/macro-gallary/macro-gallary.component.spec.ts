import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroGallaryComponent } from './macro-gallary.component';

describe('MacroGallaryComponent', () => {
  let component: MacroGallaryComponent;
  let fixture: ComponentFixture<MacroGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
