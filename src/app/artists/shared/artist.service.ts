import { Injectable } from '@angular/core';

import { ARTISTS } from "../artist.data";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtists() {
    return ARTISTS;
  }
}
