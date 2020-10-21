import { TestBed } from '@angular/core/testing';

import { ConnectToAlertControllerService } from './connect-to-alert-controller.service';

describe('ConnectToAlertControllerService', () => {
  let service: ConnectToAlertControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToAlertControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
