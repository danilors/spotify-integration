import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-album-result-list',
  templateUrl: './album-result-list.component.html',
  styleUrls: ['./album-result-list.component.scss']
})
export class AlbumResultListComponent implements OnInit {

  constructor() { }

  @Input()
  albums: any = {};

  @Input()
  label: string;

  ngOnInit(): void {
  }

}
