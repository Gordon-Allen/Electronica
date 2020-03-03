import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Artist } from '../artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  url = "http://localhost:4748/artists";

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url);
  }
  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(this.url + "/" + id);
  }

  getTrackByUrl(id: number, trackUrl: string): Observable<Artist> {
    return this.http.get<Artist>(this.url + "/" + id + "/" + trackUrl);
  }

}
