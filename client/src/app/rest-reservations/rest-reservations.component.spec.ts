import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestReservationsComponent } from './rest-reservations.component';

describe('RestReservationsComponent', () => {
  let component: RestReservationsComponent;
  let fixture: ComponentFixture<RestReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
