import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  @Input()
  album: any = {};

  @Input()
  fullImage = false;

  ngOnInit(): void {
  }

}
