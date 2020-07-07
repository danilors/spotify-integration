import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-result-list-item',
  templateUrl: './album-result-list-item.component.html',
  styleUrls: ['./album-result-list-item.component.scss']
})
export class AlbumResultListItemComponent implements OnInit {

  constructor() { }
  @Input()
  item: any;

  ngOnInit(): void {
  }

}
