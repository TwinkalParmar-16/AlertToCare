import { TestBed } from '@angular/core/testing';
import { ConnectToOccupancyManagementControllerService } from './connect-to-occupancy-management-controller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConnectToOccupancyManagementControllerService', () => {
  let service: ConnectToOccupancyManagementControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HttpClientTestingModule]
    });
    service = TestBed.inject(ConnectToOccupancyManagementControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
