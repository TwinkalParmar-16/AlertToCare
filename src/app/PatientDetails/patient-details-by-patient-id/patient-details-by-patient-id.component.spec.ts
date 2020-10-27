import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientDetailsByPatientIdComponent } from './patient-details-by-patient-id.component';


describe('PatientDetailsByPatientIdComponent', () => {
  let component: PatientDetailsByPatientIdComponent;
  let fixture: ComponentFixture<PatientDetailsByPatientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PatientDetailsByPatientIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsByPatientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Patient Details By Patient Id Component created', () => {
    expect(component).toBeTruthy();
  });

  it('Invalid Patient Id', ()=>{
    expect(component.CheckPatientId(NaN)).toBeTruthy();
  });

  it('Valid Patient Id', ()=>{
    expect(component.CheckPatientId(1)).toBeFalsy();
  })
});
