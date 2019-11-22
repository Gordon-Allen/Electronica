import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artistsArray: Artist[];

  constructor() { }

  ngOnInit(): void {
    this.artistsArray = [
      {
        id: 1,
        artist: "Adventure Club",
        albumName: "Superheaors Anoyomous",
        year: 2014,
        releaseDate: "April 29, 2014",
        url: "https://www.allmusic.com/album/dust-mw0002918360"
      },
      {
        id: 2,
        artist: "Tiesto",
        albumName: "FooBar",
        year: 2011,
        releaseDate: "April 29, 2011",
        url: "https://www.allmusic.com/album/dust-mw0002918360"
      },
      {
        id: 3,
        artist: "Seven Lions",
        albumName: "FooBar",
        year: 2013,
        releaseDate: "April 29, 2013",
        url: "https://www.allmusic.com/album/dust-mw0002918360"
      }];

    console.log(this.artistsArray);
  }



}
