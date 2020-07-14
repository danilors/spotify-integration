import { Injectable } from '@angular/core';
import { Albums, Album } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchCacheManagerService {

  private ALBUM_ITEMS_KEY = 'ALBUM_ITEMS_KEY';
  private CACHE_LIMIT_ITEMS = 10;
  constructor() { }

  addAlbumItem(album: Album): void {
    const albums: Albums = this.getSearchedResults();
    if (albums.items.find(al => al.id === album.id)) {
      return;
    }
    if (albums.items.length === this.CACHE_LIMIT_ITEMS) {
      albums.items.pop();
    }
    albums.items.push(album);
    window.localStorage.setItem(this.ALBUM_ITEMS_KEY, JSON.stringify(albums));
  }

  getSearchedResults(): Albums {
    const textAlbumsObject: string = window.localStorage.getItem(this.ALBUM_ITEMS_KEY);
    if (!textAlbumsObject) {
      return { items: [] };
    }
    return JSON.parse(textAlbumsObject);
  }

  getLastSearchedResults(): Albums {
    const result: Albums = this.getSearchedResults();
    result.items.reverse();
    return result;
  }

  updateAlbum(album: Album): void {
    const albums: Albums = this.getSearchedResults();
    const found = albums.items.find(al => al.id === album.id);
    if (found) {
      const indexOf = albums.items.indexOf(found);
      albums.items[indexOf] = album;
    }
    window.localStorage.setItem(this.ALBUM_ITEMS_KEY, JSON.stringify(albums));
  }

}
