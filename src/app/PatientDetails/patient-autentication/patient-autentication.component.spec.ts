import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAutenticationComponent } from './patient-autentication.component';

describe('PatientAutenticationComponent', () => {
  let component: PatientAutenticationComponent;
  let fixture: ComponentFixture<PatientAutenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAutenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAutenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
