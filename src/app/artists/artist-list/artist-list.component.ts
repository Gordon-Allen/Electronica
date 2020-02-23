import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';
import { ArtistService } from '../shared/artist.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artistsArray: Observable<Artist[]>;

  constructor(private artistService: ArtistService) { }

  getArtists() {
    this.artistsArray = this.artistService.getArtists();
  }

  ngOnInit() {
    this.getArtists();
  }
  parentFunctionHandler(artist) {
    alert('You selected the artist ' + artist.name + '! This message was sent from your friendly, neighbohood Artist-Card Component');
}

}
