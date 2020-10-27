import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsHomePageComponent } from './patient-details-home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientDetailsHomePageComponent', () => {
  let component: PatientDetailsHomePageComponent;
  let fixture: ComponentFixture<PatientDetailsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ PatientDetailsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Patient Details Home Page Component Created', () => {
    expect(component).toBeTruthy();
  });
});
