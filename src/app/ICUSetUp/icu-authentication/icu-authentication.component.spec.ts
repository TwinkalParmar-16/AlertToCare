import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IcuAuthenticationComponent } from './icu-authentication.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('IcuAuthenticationComponent', () => {
  let component: IcuAuthenticationComponent;
  let fixture: ComponentFixture<IcuAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ IcuAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcuAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ICU Authentication Component Created', () => {
    expect(component).toBeTruthy();
  });
  it('Valid Password',()=>{
    expect(component.checkPin("Admin@123")).toBeTruthy();
  });
  it('InValid Password',()=>{
    expect(component.checkPin("Aarna@123")).toBeFalsy();
  })
});
