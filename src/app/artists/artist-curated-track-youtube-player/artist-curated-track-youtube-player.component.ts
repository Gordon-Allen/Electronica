import { Component, OnInit } from '@angular/core';
import { Artist, Album, Track } from '../artist.model';

import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../shared/artist.service';


@Component({
  selector: 'app-artist-curated-track-youtube-player',
  templateUrl: './artist-curated-track-youtube-player.component.html',
  styleUrls: ['./artist-curated-track-youtube-player.component.css']
})
export class ArtistCuratedTrackYoutubePlayerComponent implements OnInit {
  artist: Artist;
  album: Album;
  track: Track;
  id: number;
  trackUrl: string;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {

    this.trackUrl = this.route.snapshot.paramMap.get("trackUrl");

    const id = +this.route.snapshot.paramMap.get("id");

    this.artistService.getArtistById(id).subscribe(
      artist => {
        this.artist = artist;
      },
      error => console.log("Error ", error)
    );

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
