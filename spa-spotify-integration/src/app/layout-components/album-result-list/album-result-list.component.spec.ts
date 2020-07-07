import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumResultListComponent } from './album-result-list.component';

describe('AlbumResultListComponent', () => {
  let component: AlbumResultListComponent;
  let fixture: ComponentFixture<AlbumResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
