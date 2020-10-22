import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientDetailsComponent } from './update-patient-details.component';

describe('UpdatePatientDetailsComponent', () => {
  let component: UpdatePatientDetailsComponent;
  let fixture: ComponentFixture<UpdatePatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
