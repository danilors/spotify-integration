import { Component, OnInit, Input } from '@angular/core';
import { SearchCacheManagerService } from 'src/app/services';

@Component({
  selector: 'app-album-result-list-item',
  templateUrl: './album-result-list-item.component.html',
  styleUrls: ['./album-result-list-item.component.scss']
})
export class AlbumResultListItemComponent implements OnInit {

  constructor(private searchCacheManagerService: SearchCacheManagerService) { }
  @Input()
  item: any;

  ngOnInit(): void {
  }

  saveSearchItem(album): void {
    this.searchCacheManagerService.addAlbumItem(album);
  }

}
