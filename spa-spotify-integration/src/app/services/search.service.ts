import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from './utility.service';
import { SearchResponse } from '../models';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) { }

  search(value: string): Observable<SearchResponse> {
    const parametersObject = {
      type: 'album,artist,track',
      q: value,
      limit: 10
    };
    const parameters = this.utilityService.buildQueryString(parametersObject);
    const url = `${this.baseUrl}/search?${parameters}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchArtistById(id: string): Observable<any> {
    const url = `${this.baseUrl}/artists/${id}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchAlbumTracksById(id: string): Observable<any> {
    const url = `${this.baseUrl}/albums/${id}/tracks`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchAlbumId(id: string): Observable<any> {
    const url = `${this.baseUrl}/albums/${id}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }
 
  /**
   * @param  {} error
   * @returns Observable
   */
  handleError(error): Observable<any> {
    return throwError(error.message);
  }
}
