import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './utility.service';
import { SearchResponse, Artist, Tracks } from '../models';
import { of, Observable } from 'rxjs';

describe('SearchService', () => {
  let service: SearchService;

  let httpClientMock: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        UtilityService,
        {
          provide: HttpClient,
          useValue: httpClientMock
        }
      ]
    });
    service = TestBed.inject(SearchService);
    httpClientMock = TestBed.inject(HttpClient);
  });

  it('should perform search successfully', () => {
    const searchResponse: any = { albums: { items: [{}] } };

    httpClientMock.get = jasmine.createSpy('get').and.returnValue(of(searchResponse));
    const term = 'value';
    service.search(term).subscribe(result => {
      expect(result.albums.items.length).toBe(searchResponse.albums.items.length);
    });
  });

  it('should perform search with error', () => {
    const observable = new Observable(obs => {
      obs.error('error');
      obs.complete();
    });

    httpClientMock.get = jasmine.createSpy('get').and.returnValue(of(observable));
    const term = 'value';
    service.search(term).subscribe(() => {
    }, error => {
      expect(error).toBe('error');
    });
  });

});
