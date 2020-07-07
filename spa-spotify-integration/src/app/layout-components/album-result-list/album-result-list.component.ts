import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-album-result-list',
  templateUrl: './album-result-list.component.html',
  styleUrls: ['./album-result-list.component.scss']
})
export class AlbumResultListComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  albums: any = {};

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log('albums', this.albums);
  }
}
