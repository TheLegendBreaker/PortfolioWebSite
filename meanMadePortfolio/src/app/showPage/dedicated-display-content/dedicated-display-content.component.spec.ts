import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedDisplayContentComponent } from './dedicated-display-content.component';

describe('DedicatedDisplayContentComponent', () => {
  let component: DedicatedDisplayContentComponent;
  let fixture: ComponentFixture<DedicatedDisplayContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicatedDisplayContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicatedDisplayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
