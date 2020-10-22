import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsByIcuIdComponent } from './patient-details-by-icu-id.component';

describe('PatientDetailsByIcuIdComponent', () => {
  let component: PatientDetailsByIcuIdComponent;
  let fixture: ComponentFixture<PatientDetailsByIcuIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsByIcuIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsByIcuIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
