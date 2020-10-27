import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmitPatientComponent } from './admit-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdmitPatientComponent', () => {
  let component: AdmitPatientComponent;
  let fixture: ComponentFixture<AdmitPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AdmitPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Test string IcuId', () => {
    expect(component.TestIcuId(27)).toEqual("true");
  });
});
