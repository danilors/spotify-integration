import { TestBed } from '@angular/core/testing';

import { SearchCacheManagerService } from './search-cache-manager.service';

describe('SearchCacheManagerService', () => {
  let service: SearchCacheManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCacheManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
