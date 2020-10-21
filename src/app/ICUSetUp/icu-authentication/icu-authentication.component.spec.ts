import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuAuthenticationComponent } from './icu-authentication.component';

describe('IcuAuthenticationComponent', () => {
  let component: IcuAuthenticationComponent;
  let fixture: ComponentFixture<IcuAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcuAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcuAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
