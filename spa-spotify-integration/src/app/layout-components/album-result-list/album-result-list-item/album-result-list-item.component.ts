import { Component, OnInit, Input } from '@angular/core';
import { SearchCacheManagerService } from 'src/app/services';
import { Album } from 'src/app/models';

@Component({
  selector: 'app-album-result-list-item',
  templateUrl: './album-result-list-item.component.html',
  styleUrls: ['./album-result-list-item.component.scss']
})
export class AlbumResultListItemComponent implements OnInit {

  constructor(private searchCacheManagerService: SearchCacheManagerService) { }
  @Input()
  item: Album;

  ngOnInit(): void {
  }

  saveSearchItem(album: Album): void {
    this.searchCacheManagerService.addAlbumItem(album);
  }

}
