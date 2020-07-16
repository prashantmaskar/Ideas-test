import { TestBed } from '@angular/core/testing';

import { AjaxDataRequestService } from './ajax-data-request.service';

describe('AjaxDataRequestService', () => {
  let service: AjaxDataRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxDataRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
