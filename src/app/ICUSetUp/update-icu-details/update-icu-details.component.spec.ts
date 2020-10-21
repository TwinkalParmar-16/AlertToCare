import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIcuDetailsComponent } from './update-icu-details.component';

describe('UpdateIcuDetailsComponent', () => {
  let component: UpdateIcuDetailsComponent;
  let fixture: ComponentFixture<UpdateIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
