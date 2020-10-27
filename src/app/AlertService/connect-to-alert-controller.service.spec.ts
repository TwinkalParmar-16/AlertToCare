import { TestBed } from '@angular/core/testing';
import { ConnectToAlertControllerService } from './connect-to-alert-controller.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConnectToAlertControllerService', () => {
  let service: ConnectToAlertControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HttpClientTestingModule]
    });
    service = TestBed.inject(ConnectToAlertControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
