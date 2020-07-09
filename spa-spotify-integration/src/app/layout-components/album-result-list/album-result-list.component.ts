import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Albums } from 'src/app/models';

@Component({
  selector: 'app-album-result-list',
  templateUrl: './album-result-list.component.html',
  styleUrls: ['./album-result-list.component.scss']
})
export class AlbumResultListComponent implements OnInit {

  constructor() { }

  @Input()
  albums: Albums;

  @Input()
  label: string;

  ngOnInit(): void {
  }

}
