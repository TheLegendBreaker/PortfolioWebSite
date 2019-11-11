import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedReelComponent } from './dedicated-reel.component';

describe('DedicatedReelComponent', () => {
  let component: DedicatedReelComponent;
  let fixture: ComponentFixture<DedicatedReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DedicatedReelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicatedReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
