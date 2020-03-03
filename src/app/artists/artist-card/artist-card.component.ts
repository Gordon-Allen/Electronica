import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  artist: Artist;

  @Output()
  artistClicked: EventEmitter<Artist> = new EventEmitter<Artist>();

  showArtist() {
      this.artistClicked.emit(this.artist);
  }

  constructor() { }

  ngOnInit() {
  }
}
