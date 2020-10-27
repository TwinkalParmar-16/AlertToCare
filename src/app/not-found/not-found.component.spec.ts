import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Not Found Component is created', () => {
    expect(component).toBeTruthy();
  });
});
