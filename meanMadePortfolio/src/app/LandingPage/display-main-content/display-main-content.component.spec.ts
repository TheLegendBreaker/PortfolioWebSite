import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMainContentComponent } from './display-main-content.component';

describe('DisplayMainContentComponent', () => {
  let component: DisplayMainContentComponent;
  let fixture: ComponentFixture<DisplayMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
