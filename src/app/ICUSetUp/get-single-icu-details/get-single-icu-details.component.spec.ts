import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleIcuDetailsComponent } from './get-single-icu-details.component';

describe('GetSingleIcuDetailsComponent', () => {
  let component: GetSingleIcuDetailsComponent;
  let fixture: ComponentFixture<GetSingleIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
