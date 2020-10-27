import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmitPatientComponent } from './admit-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdmitPatientComponent', () => {
  let component: AdmitPatientComponent;
  let fixture: ComponentFixture<AdmitPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AdmitPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Test Valid Input Fields', () => {
    expect(component.CheckInputFields(27,"Tom",39,"AB+","Gujurat",78)).toBeFalsy();
  });
  it('Test InValid Icu Id Field', () => {
    expect(component.CheckInputFields(NaN,"Tom",39,"AB+","Gujurat",78)).toBeTruthy();
  });
  it('Test InValid name Field', () => {
    expect(component.CheckInputFields(27,"",NaN,"AB+","Gujurat",78)).toBeTruthy();
  });
  it('Test InValid Blood Group Field', () => {
    expect(component.CheckInputFields(27,"Tom",39,"","Gujurat",78)).toBeTruthy();
  });
  it('Test InValid Address Field', () => {
    expect(component.CheckInputFields(27,"Tom",39,"AB+","",78)).toBeTruthy();
  });
  it('Test InValid Bed Number Field', () => {
    expect(component.CheckInputFields(27,"Tom",39,"AB+","Gujurat",NaN)).toBeTruthy();
  });
  it('Test InValid Input Fields', () => {
    expect(component.CheckInputFields(NaN,"",NaN,"","",NaN)).toBeTruthy();
  });
});
