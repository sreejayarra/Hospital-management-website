import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentDataComponent } from './view-appointment-data.component';

describe('ViewAppointmentDataComponent', () => {
  let component: ViewAppointmentDataComponent;
  let fixture: ComponentFixture<ViewAppointmentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
