import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbCATComponent } from './blurb-cat.component';

describe('BlurbCATComponent', () => {
  let component: BlurbCATComponent;
  let fixture: ComponentFixture<BlurbCATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbCATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbCATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
