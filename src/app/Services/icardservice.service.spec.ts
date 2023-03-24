import { TestBed } from '@angular/core/testing';

import { icardserviceService } from './icardservice.service';

describe('icardserviceService', () => {
  let service: icardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(icardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
