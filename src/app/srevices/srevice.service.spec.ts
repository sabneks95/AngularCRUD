import { TestBed } from '@angular/core/testing';

import { SreviceService } from './srevice.service';

describe('SreviceService', () => {
  let service: SreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
