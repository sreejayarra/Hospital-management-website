import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReviewsComponent } from './patient-reviews.component';

describe('PatientReviewsComponent', () => {
  let component: PatientReviewsComponent;
  let fixture: ComponentFixture<PatientReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
