import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIcusDetailsComponent } from './all-icus-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllIcusDetailsComponent', () => {
  let component: AllIcusDetailsComponent;
  let fixture: ComponentFixture<AllIcusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ AllIcusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIcusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('All ICU Details component created', () => {
    expect(component).toBeTruthy();
  });
});
