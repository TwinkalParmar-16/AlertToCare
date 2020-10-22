import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsHomePageComponent } from './patient-details-home-page.component';

describe('PatientDetailsHomePageComponent', () => {
  let component: PatientDetailsHomePageComponent;
  let fixture: ComponentFixture<PatientDetailsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
