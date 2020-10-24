import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteIcuDetailsComponent } from './delete-icu-details.component';

describe('DeleteIcuDetailsComponent', () => {
  let component: DeleteIcuDetailsComponent;
  let fixture: ComponentFixture<DeleteIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'AlertToCare'`, () => {
    const fixture = TestBed.createComponent(DeleteIcuDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.currentIcuId).toEqual('AlertToCare');
  });
});
