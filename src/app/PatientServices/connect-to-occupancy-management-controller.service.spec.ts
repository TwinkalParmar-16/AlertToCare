import { TestBed } from '@angular/core/testing';

import { ConnectToOccupancyManagementControllerService } from './connect-to-occupancy-management-controller.service';

describe('ConnectToOccupancyManagementControllerService', () => {
  let service: ConnectToOccupancyManagementControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectToOccupancyManagementControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
