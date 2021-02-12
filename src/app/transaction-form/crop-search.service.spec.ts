import { TestBed } from '@angular/core/testing';

import { CropSearchService } from './crop-search.service';

describe('CropSearchService', () => {
  let service: CropSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
