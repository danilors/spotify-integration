import { Albums } from './albums.model';
import { Artists } from './artists.model';
import { Tracks } from './tracks.model';

export interface SearchResponse {
    albums: Albums;
    artists: Artists;
    tracks: Tracks;
}

