import { Component, OnInit } from '@angular/core';

import { Artist, Album, Track } from '../artist.model';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artist: Artist;
  album: Album;
  track: Track;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.artistService.getArtistById(id).subscribe(
      artist => {
        this.artist = artist;
      },
      error => console.log("Error ", error)
    );
  }
 }
