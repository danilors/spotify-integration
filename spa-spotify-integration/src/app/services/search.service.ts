import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from './utility.service';
import { SearchResponse } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private httpClient: HttpClient, private utilityService: UtilityService) { }

  search(value: string): Observable<SearchResponse> {
    const parametersObject = {
      type: environment.search.types.join(','),
      q: value,
      limit: environment.search.limit
    };
    const parameters = this.utilityService.buildQueryString(parametersObject);
    const url = `${environment.spotifyBaseUrl}/search?${parameters}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchArtistById(id: string): Observable<any> {
    const url = `${environment}/artists/${id}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchAlbumTracksById(id: string): Observable<any> {
    const url = `${environment.spotifyBaseUrl}/albums/${id}/tracks`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  searchAlbumId(id: string): Observable<any> {
    const url = `${environment.spotifyBaseUrl}/albums/${id}`;
    return this.httpClient.get(url)
      .pipe(catchError(this.handleError));
  }

  handleError(error): Observable<any> {
    return throwError(error.message);
  }
}
