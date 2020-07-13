import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService, UtilityService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { SearchCacheManagerService } from '../services';
import { Album } from '../models';
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
  error;

  ngOnDestroy(): void {
    this.pauseTrack();

    this.currentTrack = undefined;
    this.album = undefined;
  }

  ngOnInit(): void {
    this.start();
  }

  start(): void {

    const albumId = this.activatedRoute.snapshot.paramMap.get('id');
    this.album = this.searchCacheManagerService.getSearchedResults().items.find(album => album.id === albumId);
    if (this.album) {
      this.searchTracks(albumId);
    } else {
      this.searchService.searchAlbumId(albumId).subscribe((result: Album) => {
        this.album = result;
        this.searchTracks(albumId);
      });
    }
  }

  searchTracks(albumId): void {
    if (this.album && !this.album.tracks) {
      this.searchService.searchAlbumTracksById(albumId).subscribe(result => {
        this.album.tracks = result.items;
        this.album.tracks = this.album.tracks.map(t => {
          t.paused = true;
          return t;
        });
        this.searchCacheManagerService.updateAlbum(this.album);
      }, error => {
        this.error = error;
        console.log('AlbumComponent error', error);
      });
    }
  }

  playPauseTrack(track): void {

    if (!this.currentTrack) {
      this.currentTrack = new Audio(track.preview_url);
      this.currentTrack.play();
      track.paused = false;
    } else {
      this.pauseTrack();
      track.paused = true;
    }
  }

  private pauseTrack(): void {
    if (this.currentTrack) {
      this.currentTrack.pause();
      this.currentTrack = undefined;
    }
  }

  convertTime(time: number): string {
    return this.utilityService.convertMillisecondsToMinutes(time);
  }

}
