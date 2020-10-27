import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteIcuDetailsComponent } from './delete-icu-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteIcuDetailsComponent', () => {
  let component: DeleteIcuDetailsComponent;
  let fixture: ComponentFixture<DeleteIcuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DeleteIcuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIcuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Delete ICU Details Component Created', () => {
    expect(component).toBeTruthy();
  });
  it('ICU ID Field Validation', ()=> {
    expect(component.CheckCurrentIcuId(8)).toBeFalsy();
  });

  it('ICU ID Field Validation for Invalid Input', ()=> {
    expect(component.CheckCurrentIcuId(NaN)).toBeTruthy();
  })




 
});
