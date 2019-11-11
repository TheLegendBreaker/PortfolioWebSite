import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwResSendResBttnComponent } from './shw-res-send-res-bttn.component';

describe('ShwResSendResBttnComponent', () => {
  let component: ShwResSendResBttnComponent;
  let fixture: ComponentFixture<ShwResSendResBttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwResSendResBttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwResSendResBttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
