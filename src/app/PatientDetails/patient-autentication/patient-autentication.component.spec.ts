import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAutenticationComponent } from './patient-autentication.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PatientAutenticationComponent', () => {
  let component: PatientAutenticationComponent;
  let fixture: ComponentFixture<PatientAutenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ PatientAutenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAutenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Patient Authentication Component Created', () => {
    expect(component).toBeTruthy();
  });
  it('Valid Password', () => {
    expect(component.checkPin("Admin@123")).toBeTruthy();
  });
  it('InValid Password', () => {
    expect(component.checkPin("Fog@123")).toBeFalsy();
  });
  it('Empty Password', () => {
    expect(component.checkPin("")).toBeFalsy();
  });
});
