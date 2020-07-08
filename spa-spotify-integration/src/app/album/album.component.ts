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

  currentTrack;
  album;

  ngOnDestroy(): void {
    this.pauseTrack(this.currentTrack);

    this.currentTrack = undefined;
    this.album = undefined;
  }

  ngOnInit(): void {
    const albumId = this.activatedRoute.snapshot.paramMap.get('id');
    this.album = this.searchCacheManagerService.getSearchedResults().items.find(album => album.id === albumId);
    if (this.album) {
      this.searchTracks(albumId);
    } else {
      this.searchService.searchAlbumId(albumId).subscribe(result => {
        this.album = result;
        this.searchTracks(albumId);
      });
    }
  }

  searchTracks(albumId): void {
    if (!this.album.tracks) {
      this.searchService.searchAlbumTracksById(albumId).subscribe(result => {
        this.album.tracks = result.items;
        this.album.tracks = this.album.tracks.map(t => {
          t.paused = true;
          return t;
        });
        this.searchCacheManagerService.updateAlbum(this.album);
      }, error => {
        console.log('AlbumComponent error', error);
      });
    }
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
