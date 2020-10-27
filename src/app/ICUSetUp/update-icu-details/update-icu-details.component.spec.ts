import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIcuDetailsComponent } from './update-icu-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateIcuDetailsComponent', () => {
  let component: UpdateIcuDetailsComponent;
  let fixture: ComponentFixture<UpdateIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UpdateIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Update ICU Details Component Created', () => {
    expect(component).toBeTruthy();
  });
 
  it('Tests For Valid Input fields', () => {
    expect(component.CheckInputFields(4,"C",27)).toBeFalsy();
  });

  it('Tests For InValid Number of Beds Input field', () => {
    expect(component.CheckInputFields(NaN,"C",27)).toBeTruthy();
  });
  it('Tests For InValid Layout field', () => {
    expect(component.CheckInputFields(4,"",27)).toBeTruthy();
  });

  it('Tests For InValid id field', () => {
    expect(component.CheckInputFields(4,"",NaN)).toBeTruthy();
  });

  it('Tests For InValid fields', () => {
    expect(component.CheckInputFields(NaN,"",NaN)).toBeTruthy();
  });




});
