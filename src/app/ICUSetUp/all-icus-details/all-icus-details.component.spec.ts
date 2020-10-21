import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIcusDetailsComponent } from './all-icus-details.component';

describe('AllIcusDetailsComponent', () => {
  let component: AllIcusDetailsComponent;
  let fixture: ComponentFixture<AllIcusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIcusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIcusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
