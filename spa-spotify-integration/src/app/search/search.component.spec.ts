import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchCacheManagerService } from '../services';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchCacheManagerServiceMock: any = {};
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        {
          provide: SearchCacheManagerService,
          useValue: searchCacheManagerServiceMock
        }
      ]
    })
    .compileComponents();

    searchCacheManagerServiceMock = TestBed.inject(SearchCacheManagerService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
