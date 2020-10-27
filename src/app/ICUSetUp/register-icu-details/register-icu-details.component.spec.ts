import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIcuDetailsComponent } from './register-icu-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterIcuDetailsComponent', () => {
  let component: RegisterIcuDetailsComponent;
  let fixture: ComponentFixture<RegisterIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ RegisterIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Register ICU Details Component Created', () => {
    expect(component).toBeTruthy();
  });

  it('Number Of Beds Field with Valid Input',()=>{
    expect(component.CheckNoOfBedsField(4)).toBeFalsy();
  });
  it('Number Of Beds Field with InValid Input',()=>{
    expect(component.CheckNoOfBedsField(NaN)).toBeTruthy();
  })

  it('Layout Field with Valid Input',()=>{
    expect(component.CheckLayoutField("L")).toBeFalsy();
  })
  it('Layout Field with InValid Input',()=>{
    expect(component.CheckLayoutField("")).toBeTruthy();
  })
});
