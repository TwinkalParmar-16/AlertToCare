import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertToCareHomePageComponent } from './alert-to-care-home-page.component';

describe('AlertToCareHomePageComponent', () => {
  let component: AlertToCareHomePageComponent;
  let fixture: ComponentFixture<AlertToCareHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertToCareHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertToCareHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
