import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteEditComponent } from './carte-edit.component';

describe('CarteEditComponent', () => {
  let component: CarteEditComponent;
  let fixture: ComponentFixture<CarteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
