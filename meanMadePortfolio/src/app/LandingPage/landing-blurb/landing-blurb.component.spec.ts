import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBlurbComponent } from './landing-blurb.component';

describe('LandingBlurbComponent', () => {
  let component: LandingBlurbComponent;
  let fixture: ComponentFixture<LandingBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingBlurbComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
