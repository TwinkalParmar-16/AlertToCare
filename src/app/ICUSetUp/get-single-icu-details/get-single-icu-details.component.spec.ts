import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleIcuDetailsComponent } from './get-single-icu-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetSingleIcuDetailsComponent', () => {
  let component: GetSingleIcuDetailsComponent;
  let fixture: ComponentFixture<GetSingleIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetSingleIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Get Single ICU Details Component Created', () => {
    expect(component).toBeTruthy();
  });

  it('ICU ID Field Validation', ()=> {
    expect(component.TestIcuId(27)).toBeFalsy();
  });

  it('ICU ID Field Validation for Invalid Input', ()=> {
    expect(component.TestIcuId(NaN)).toBeTruthy();
  })
});
