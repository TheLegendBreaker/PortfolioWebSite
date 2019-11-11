import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResumeDialogComponent } from './send-resume-dialog.component';

describe('SendResumeDialogComponent', () => {
  let component: SendResumeDialogComponent;
  let fixture: ComponentFixture<SendResumeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendResumeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendResumeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
