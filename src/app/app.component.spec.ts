import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        // Other provides...
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app',async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
