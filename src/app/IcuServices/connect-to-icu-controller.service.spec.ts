import { TestBed } from '@angular/core/testing';
import { ConnectToIcuControllerService } from './connect-to-icu-controller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ConnectToIcuControllerService', () => {
  let service: ConnectToIcuControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ConnectToIcuControllerService]
    });
    service = TestBed.inject(ConnectToIcuControllerService);
    //service = TestBed.get(ConnectToIcuControllerService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
