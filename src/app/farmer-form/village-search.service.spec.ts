import { TestBed } from '@angular/core/testing';

import { VillageSearchService } from './village-search.service';

describe('VillageSearchService', () => {
  let service: VillageSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
