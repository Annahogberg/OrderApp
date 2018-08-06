import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteNewComponent } from './carte-new.component';

describe('CarteNewComponent', () => {
  let component: CarteNewComponent;
  let fixture: ComponentFixture<CarteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
