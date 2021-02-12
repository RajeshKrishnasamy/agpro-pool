import { TestBed } from '@angular/core/testing';

import { FarmerSearchService } from './farmer-search.service';

describe('FarmerSearchService', () => {
  let service: FarmerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
