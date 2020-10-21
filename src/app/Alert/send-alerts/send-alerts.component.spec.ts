import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAlertsComponent } from './send-alerts.component';

describe('SendAlertsComponent', () => {
  let component: SendAlertsComponent;
  let fixture: ComponentFixture<SendAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
