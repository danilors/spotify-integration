import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { SearchService, SearchCacheManagerService, UtilityService } from '../services';
import { ActivatedRoute } from '@angular/router';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  let searchServiceMock: any = {};
  let activatedRouteMock: any = {};
  let searchCacheManagerServiceMock: any = {};
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumComponent ],
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
      ]
    })
    .compileComponents();

    searchServiceMock = TestBed.inject(SearchService);
    activatedRouteMock = TestBed.inject(ActivatedRoute);
    searchCacheManagerServiceMock = TestBed.inject(SearchCacheManagerService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
