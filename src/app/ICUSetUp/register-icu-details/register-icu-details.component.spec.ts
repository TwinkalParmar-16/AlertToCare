import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIcuDetailsComponent } from './register-icu-details.component';

describe('RegisterIcuDetailsComponent', () => {
  let component: RegisterIcuDetailsComponent;
  let fixture: ComponentFixture<RegisterIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
