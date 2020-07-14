import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumResultListItemComponent } from './album-result-list-item.component';
import { Album } from '../../../models';

describe('AlbumResultListItemComponent', () => {
  let component: AlbumResultListItemComponent;
  let fixture: ComponentFixture<AlbumResultListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumResultListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumResultListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
