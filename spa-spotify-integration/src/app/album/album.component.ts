import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  tracks: any[] = [];
  currentAudio: any;

  ngOnInit(): void {
    console.log('AlbumComponent: ngOnInit');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchService.searchAlbumTracksById(id).subscribe(result => {
      this.tracks = result.items;
    }, error => {
      console.log('AlbumComponent error', error);
    });
  }

  playTrack(url): void {
    this.currentAudio = new Audio(url);
    this.currentAudio.play();
  }

  pauseTrack(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

}
