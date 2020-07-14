import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchCacheManagerService, SearchService } from '../services';
import { Albums, SearchResponse, Artist, Tracks, Artists } from '../models';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchCacheManagerServiceMock: any = {};
  let searchServiceMock: any = {};

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {
          provide: SearchCacheManagerService,
          useValue: searchCacheManagerServiceMock
        },
        {
          provide: SearchService,
          useValue: searchServiceMock
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });


    searchCacheManagerServiceMock = TestBed.inject(SearchCacheManagerService);
    searchServiceMock = TestBed.inject(SearchService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start', () => {
    const searchedItemsMock: Albums = {
      items: []
    };

    searchCacheManagerServiceMock.getLastSearchedResults = jasmine.createSpy('getLastSearchedResults').and.returnValue(searchedItemsMock);
    component.start();
    expect(searchCacheManagerServiceMock.getLastSearchedResults).toHaveBeenCalled();

  });

  it('should search', () => {

    const albums: Albums = {
      items: []
    };
    const artists: Artists = {
      items: []
    };
    const tracks: Tracks = {
      items: []
    };

    const searchResponse: SearchResponse = {
      albums,
      artists,
      tracks,
    };
    searchServiceMock.search = jasmine.createSpy('search').and.returnValue(of(searchResponse));

    const term = {
      value: 'Foo fighters'
    };
    component.search(term);

    expect(searchServiceMock.search).toHaveBeenCalled();
  });
});
