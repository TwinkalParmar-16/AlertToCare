import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAuthenticationComponent } from './alert-authentication.component';

describe('AlertAuthenticationComponent', () => {
  let component: AlertAuthenticationComponent;
  let fixture: ComponentFixture<AlertAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
