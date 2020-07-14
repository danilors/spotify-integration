import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { SearchService, SearchCacheManagerService, UtilityService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Album, Albums, Tracks, Track } from '../models';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let searchServiceMock: any = {};
  let searchCacheManagerServiceMock: any = {};

  let activatedRouteMock: any = {
    snapshot: {
      paramMap: {
        get: (param: string) => (param),
        has: () => true
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      providers: [
        UtilityService,
        {
          provide: SearchService,
          useValue: searchServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
        {
          provide: SearchCacheManagerService,
          useValue: searchCacheManagerServiceMock
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    searchServiceMock = TestBed.inject(SearchService);
    activatedRouteMock = TestBed.inject(ActivatedRoute);
    searchCacheManagerServiceMock = TestBed.inject(SearchCacheManagerService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;

  });

  it('should ngOnInit', () => {
    component.start = jasmine.createSpy('').and.callThrough();
    component.ngOnInit();
    expect(component.start).toHaveBeenCalled();
  });

  it('should start with cache results', () => {
    const albumId = '984395834';

    activatedRouteMock.snapshot.paramMap.get = jasmine.createSpy('get').and.returnValue(albumId);
    const album = {};
    const albumItem: Album = {
      id: '984395834'
    };
    const cachedAlbums: Albums = {
      items: [albumItem]
    };

    searchCacheManagerServiceMock.getSearchedResults = jasmine.createSpy('getSearchedResults').and.returnValue(cachedAlbums);

    component.searchTracks = jasmine.createSpy('searchTracks').and.callThrough();
    component.start();

    expect(component.searchTracks).toHaveBeenCalled();

  });

  it('should start with no cache', () => {
    const albumId = '984395834';

    activatedRouteMock.snapshot.paramMap.get = jasmine.createSpy('get').and.returnValue(albumId);
    const album = {};
    const albumItem: Album = {
      id: '1234567890'
    };
    const cachedAlbums: Albums = {
      items: [albumItem]
    };

    searchServiceMock.searchAlbumId = jasmine.createSpy('searchAlbumId').and.returnValue(of(album));
    searchCacheManagerServiceMock.getSearchedResults = jasmine.createSpy('getSearchedResults').and.returnValue(cachedAlbums);

    component.searchTracks = jasmine.createSpy('searchTracks').and.callThrough();
    component.start();

    expect(searchServiceMock.searchAlbumId).toHaveBeenCalled();
    expect(component.searchTracks).toHaveBeenCalled();

  });


  it('should search tracks with album id', () => {
    component.album = {};
    const albumId = '984395834';

    const track: Track = {
      id: '54321'
    };
    const tracks: Tracks = {
      items: [
        track
      ]
    };

    searchCacheManagerServiceMock.updateAlbum = jasmine.createSpy('updateAlbum').and.callThrough();
    searchServiceMock.searchAlbumTracksById = jasmine.createSpy('searchAlbumTracksById').and.returnValue(of(tracks));
    component.searchTracks(albumId);

    expect(searchServiceMock.searchAlbumTracksById).toHaveBeenCalled();
    expect(searchCacheManagerServiceMock.updateAlbum).toHaveBeenCalled();

  });

  it('should search tracks with service error', () => {
    component.album = {};
    const albumId = '984395834';

    const track: Track = {
      id: '54321'
    };

    const serviceErrorResponse = new Observable(obs => obs.error({ message: 'service error' }));

    searchCacheManagerServiceMock.updateAlbum = jasmine.createSpy('updateAlbum').and.callThrough();
    searchServiceMock.searchAlbumTracksById = jasmine.createSpy('searchAlbumTracksById').and.returnValue(serviceErrorResponse);
    component.searchTracks(albumId);

    expect(searchServiceMock.searchAlbumTracksById).toBeDefined();
    expect(component.error.message).toBe('service error');

  });

  it('should search tracks with service error', () => {

  });

});
