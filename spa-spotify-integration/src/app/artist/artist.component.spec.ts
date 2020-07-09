import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { SearchService } from '../services';
import { ActivatedRoute } from '@angular/router';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  let searchServiceMock: any = {};
  let activatedRouteMock: any = {};

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
