import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  @Input()
  album: Album;

  @Input()
  fullImage = false;

  ngOnInit(): void {
  }

}
