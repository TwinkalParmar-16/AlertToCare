import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlertToCareHomePageComponent } from './alert-to-care-home-page.component';

describe('AlertToCareHomePageComponent', () => {
  let component: AlertToCareHomePageComponent;
  let fixture: ComponentFixture<AlertToCareHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ AlertToCareHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertToCareHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Alert To Care Home Page Component Created', () => {
    expect(component).toBeTruthy();
  });
});
