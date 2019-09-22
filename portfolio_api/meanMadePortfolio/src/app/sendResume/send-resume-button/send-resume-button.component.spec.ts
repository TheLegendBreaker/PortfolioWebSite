import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResumeButtonComponent } from './send-resume-button.component';

describe('SendResumeButtonComponent', () => {
  let component: SendResumeButtonComponent;
  let fixture: ComponentFixture<SendResumeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendResumeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendResumeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
