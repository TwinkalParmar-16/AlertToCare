import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SendAlertsComponent } from './send-alerts.component';

describe('SendAlertsComponent', () => {
  let component: SendAlertsComponent;
  let fixture: ComponentFixture<SendAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ SendAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Send Alert Component Created', () => {
    expect(component).toBeTruthy();
  });
  
  it('Valid Input Fileds', () => {
    expect(component.CheckInputFields(2,20,200,200)).toBeFalsy();
  });
  it('InValid PatientId Filed', () => {
    expect(component.CheckInputFields(NaN,20,200,200)).toBeTruthy();
  });
  it('InValid bpm Filed', () => {
    expect(component.CheckInputFields(2,NaN,200,200)).toBeTruthy();
  });
  it('InValid spo2 Filed', () => {
    expect(component.CheckInputFields(2,20,NaN,200)).toBeTruthy();
  });
  it('InValid rr Filed', () => {
    expect(component.CheckInputFields(2,20,200,NaN)).toBeTruthy();
  });
  it('InValid Input Fileds', () => {
    expect(component.CheckInputFields(NaN,NaN,NaN,NaN)).toBeTruthy();
  });

});
