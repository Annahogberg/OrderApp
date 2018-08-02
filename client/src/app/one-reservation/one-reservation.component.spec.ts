import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReservationComponent } from './one-reservation.component';

describe('OneReservationComponent', () => {
  let component: OneReservationComponent;
  let fixture: ComponentFixture<OneReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
