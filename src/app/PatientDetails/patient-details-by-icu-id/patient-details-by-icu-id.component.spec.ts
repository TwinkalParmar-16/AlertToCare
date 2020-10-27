import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsByIcuIdComponent } from './patient-details-by-icu-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientDetailsByIcuIdComponent', () => {
  let component: PatientDetailsByIcuIdComponent;
  let fixture: ComponentFixture<PatientDetailsByIcuIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PatientDetailsByIcuIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsByIcuIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Patient Details by ICU Id Component created', () => {
    expect(component).toBeTruthy();
  });
  it('Valid PatientIcuId',()=>{
    expect(component.CheckIcuId(27)).toBeFalsy();
  });
  it('InValid PatientIcuId',()=>{
    expect(component.CheckIcuId(NaN)).toBeTruthy();
  });
});
