import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePatientComponent } from './discharge-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DischargePatientComponent', () => {
  let component: DischargePatientComponent;
  let fixture: ComponentFixture<DischargePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DischargePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Discharge Patient component is created', () => {
    expect(component).toBeTruthy();
  });
  it('Valid Id to Discharge',()=>
  {
    expect(component.CheckCurrentId(8)).toBeFalsy;
  });
  it('InValid Id to Discharge',()=>
  {
    expect(component.CheckCurrentId(NaN)).toBeTruthy;
  })
});
