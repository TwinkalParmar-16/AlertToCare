import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsByPatientIdComponent } from './patient-details-by-patient-id.component';

describe('PatientDetailsByPatientIdComponent', () => {
  let component: PatientDetailsByPatientIdComponent;
  let fixture: ComponentFixture<PatientDetailsByPatientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsByPatientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsByPatientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
