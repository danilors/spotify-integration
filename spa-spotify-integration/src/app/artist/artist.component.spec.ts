import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { SearchService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models';
import { of } from 'rxjs';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  let searchServiceMock: any = {};
  let activatedRouteMock: any = {

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistComponent],
      providers: [
        {
          provide: SearchService,
          useValue: searchServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        }
      ]
    })
      .compileComponents();
    searchServiceMock = TestBed.inject(SearchService);
    activatedRouteMock = TestBed.inject(ActivatedRoute);
    const artist: any = {};

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    component.start = jasmine.createSpy('start').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // snapshot: {
  //   paramMap: {
  //     get: (param: string) => param,
  //       has: () => true
  //   }
  // }
  // searchServiceMock.searchArtistById = jasmine.createSpy('searchArtistById').and.returnValue(of(artist));
});
