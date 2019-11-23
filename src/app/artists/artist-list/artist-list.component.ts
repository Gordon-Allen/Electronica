import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';
import { ARTISTS } from '../artist.data';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artistsArray: Artist[];

  constructor() { }

  ngOnInit(): void {
    this.artistsArray = this.artistsArray = ARTISTS;
  }

  parentFunctionHandler(artist) {
    alert('You selected the artist ' + artist.name + '! This message was sent from your friendly, neighbohood Artist-Card Component');
}

}
