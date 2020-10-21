import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuSetUpHomePageComponent } from './icu-set-up-home-page.component';

describe('IcuSetUpHomePageComponent', () => {
  let component: IcuSetUpHomePageComponent;
  let fixture: ComponentFixture<IcuSetUpHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcuSetUpHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcuSetUpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
