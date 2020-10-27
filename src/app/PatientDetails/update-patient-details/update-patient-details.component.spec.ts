import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdatePatientDetailsComponent } from './update-patient-details.component';

describe('UpdatePatientDetailsComponent', () => {
  let component: UpdatePatientDetailsComponent;
  let fixture: ComponentFixture<UpdatePatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UpdatePatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Update Patient Details Component Created', () => {
    expect(component).toBeTruthy();
  });
  it("Check Valid Input Fields",() =>{
    expect(component.CheckInputFields(2,"Jenny",99,"AB-","Karnataka",27,3)).toBeFalsy();
  });
  it("Check InValid Patient Id Field",()=> {
    expect(component.CheckInputFields(NaN,"Jenny",99,"AB-","Karnataka",27,3)).toBeTruthy();
  });
  it("Check InValid Name Field",()=> {
    expect(component.CheckInputFields(2,"",99,"AB-","Karnataka",27,3)).toBeTruthy();
  });
  it("Check InValid Age Field",()=> {
    expect(component.CheckInputFields(2,"Jenny",NaN,"AB-","Karnataka",27,3)).toBeTruthy();
  });
  it("Check InValid BloodGroup Field",()=> {
    expect(component.CheckInputFields(2,"Jenny",99,"","Karnataka",27,3)).toBeTruthy();
  });
  it("Check InValid Address Field",()=> {
    expect(component.CheckInputFields(2,"Jenny",99,"AB-","",27,3)).toBeTruthy();
  });
  it("Check InValid Icu Id Field",()=> {
    expect(component.CheckInputFields(2,"Jenny",99,"AB-","Karnataka",NaN,3)).toBeTruthy();
  });
  it("Check InValid Bed Number Field",()=> {
    expect(component.CheckInputFields(2,"Jenny",99,"AB-","Karnataka",27,NaN)).toBeTruthy();
  });
  it("Check InValid Input Fields",()=> {
    expect(component.CheckInputFields(NaN,"",NaN,"","",NaN,NaN)).toBeTruthy();
  });
  

});
