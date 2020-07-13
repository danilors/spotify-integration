import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
    album?: Album;
    artists?: Artist[];
    available_markets?: any[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: any;
    external_urls?: any;
    href?: string;
    id: string;
    is_local?: false;
    name?: string;
    popularity?: number;
    preview_url?: null;
    track_number?: number;
    type?: string;
    uri?: string;
}
