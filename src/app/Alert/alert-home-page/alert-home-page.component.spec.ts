import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHomePageComponent } from './alert-home-page.component';

describe('AlertHomePageComponent', () => {
  let component: AlertHomePageComponent;
  let fixture: ComponentFixture<AlertHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
