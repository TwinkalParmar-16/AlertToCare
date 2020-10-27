import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertAuthenticationComponent } from './alert-authentication.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AlertAuthenticationComponent', () => {
  let component: AlertAuthenticationComponent;
  let fixture: ComponentFixture<AlertAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ AlertAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Alert Authentication Component Created', () => {
    expect(component).toBeTruthy();
  });
  it('Valid Password',()=>{
    expect(component.checkPin("AdminAlert@123")).toBeTruthy();
  });
  it('InValid Password',()=>{
    expect(component.checkPin("Twinkal@123")).toBeFalsy();
  })
});
