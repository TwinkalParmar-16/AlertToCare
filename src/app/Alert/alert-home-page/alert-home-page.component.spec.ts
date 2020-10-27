import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlertHomePageComponent } from './alert-home-page.component';

describe('AlertHomePageComponent', () => {
  let component: AlertHomePageComponent;
  let fixture: ComponentFixture<AlertHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ AlertHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Alert Home Page Component Created', () => {
    expect(component).toBeTruthy();
  });
});
