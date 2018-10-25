import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAndWhiteComponent } from './black-and-white.component';

describe('BlackAndWhiteComponent', () => {
  let component: BlackAndWhiteComponent;
  let fixture: ComponentFixture<BlackAndWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackAndWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackAndWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
