import { TestBed } from '@angular/core/testing';
import { ConnectToIcuControllerService } from './connect-to-icu-controller.service';
import { of } from 'rxjs';

describe('ConnectToIcuControllerService', () => {
  let service: ConnectToIcuControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ConnectToIcuControllerService]
    });
    service = TestBed.inject(ConnectToIcuControllerService);
    //service = TestBed.get(ConnectToIcuControllerService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created method 2', () => { // Remove inject()
    expect(service).toBeTruthy();
  });
});
