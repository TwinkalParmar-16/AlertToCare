import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcuSetUpHomePageComponent } from './icu-set-up-home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IcuSetUpHomePageComponent', () => {
  let component: IcuSetUpHomePageComponent;
  let fixture: ComponentFixture<IcuSetUpHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ IcuSetUpHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcuSetUpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ICU Setup HomePage created', () => {
    expect(component).toBeTruthy();
  });
});
