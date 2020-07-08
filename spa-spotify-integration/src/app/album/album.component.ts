import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, UtilityService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { SearchCacheManagerService } from '../services';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private searchCacheManagerService: SearchCacheManagerService,
    private utilityService: UtilityService
  ) { }

  tracks: any[] = [];
  currentTrack;
  album;

  ngOnDestroy(): void {
    this.pauseTrack(this.currentTrack);
    this.tracks = [];
    this.currentTrack = undefined;
    this.album = undefined;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchService.searchAlbumTracksById(id).subscribe(result => {
      this.tracks = result.items;
      this.album = this.searchCacheManagerService.getSearchedResults().items.find(album => album.id === id);
      this.tracks = this.tracks.map(t => {
        t.paused = true;
        return t;
      });
    }, error => {
      console.log('AlbumComponent error', error);
    });
  }

  playTrack(track): void {
    if (this.currentTrack && track.preview_url === this.currentTrack.src) {
      this.pauseTrack(this.currentTrack);
      track.paused = this.currentTrack.paused;
      return;
    }
    this.pauseTrack(this.currentTrack);
    this.currentTrack = new Audio(track.preview_url);
    this.currentTrack.play();
    track.paused = this.currentTrack.paused;
  }

  pauseTrack(track): void {
    if (track) {
      track.pause();
    }
  }

  convertTime(time: number): string {
    return this.utilityService.convertMillisecondsToMinutes(time);
  }

}
