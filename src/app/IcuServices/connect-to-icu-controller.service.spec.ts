import { TestBed } from '@angular/core/testing';

import { ConnectToIcuControllerService } from './connect-to-icu-controller.service';

describe('ConnectToIcuControllerService', () => {
  let service: ConnectToIcuControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToIcuControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
