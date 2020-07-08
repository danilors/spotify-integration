import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchCacheManagerService {

  private ALBUM_ITEMS_KEY = 'ALBUM_ITEMS_KEY';
  private CACHE_LIMIT_ITEMS = 10;
  constructor() { }

  addAlbumItem(album): void {
    const albums = this.getSearchedResults();
    if (albums.items.find(al => al.id === album.id)) {
      return;
    }
    if (albums.items.length === this.CACHE_LIMIT_ITEMS) {
      albums.items.pop();
    }
    albums.items.push(album);
    window.localStorage.setItem(this.ALBUM_ITEMS_KEY, JSON.stringify(albums));
  }

  getSearchedResults(): any {
    const textAlbumsObject: any = window.localStorage.getItem(this.ALBUM_ITEMS_KEY);
    if (!textAlbumsObject) {
      return { items: [] };
    }
    return JSON.parse(textAlbumsObject);
  }

  getLastSearchedResults(): any {
    const result = this.getSearchedResults();
    result.items.reverse();
    return result;
  }

  updateAlbum(album): void {
    const albums = this.getSearchedResults();
    const found = albums.items.find(al => al.id === album.id);
    if (found) {
      const indexOf = albums.items.indexOf(found);
      albums.items[indexOf] = album;
    }
    window.localStorage.setItem(this.ALBUM_ITEMS_KEY, JSON.stringify(albums));
  }

}
