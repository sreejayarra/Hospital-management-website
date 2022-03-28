import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregancyMeasuresComponent } from './pregancy-measures.component';

describe('PregancyMeasuresComponent', () => {
  let component: PregancyMeasuresComponent;
  let fixture: ComponentFixture<PregancyMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregancyMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregancyMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
