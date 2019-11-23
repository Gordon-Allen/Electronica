import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: Artist;

  showArtist(){
    alert('You selected: ' + this.artist.name + '!');
  }

  constructor() { }

  ngOnInit() {
  }

}
