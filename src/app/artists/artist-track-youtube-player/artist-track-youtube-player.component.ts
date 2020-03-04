import { Component, OnInit } from '@angular/core';
import { Artist, Album, Track } from '../artist.model';

import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-artist-track-youtube-player',
  templateUrl: './artist-track-youtube-player.component.html',
  styleUrls: ['./artist-track-youtube-player.component.css']
})
export class ArtistTrackYoutubePlayerComponent implements OnInit {
  artist: Artist;
  album: Album;
  track: Track;
  id: number;
  trackId: any;
  trackUrl: string;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {

    this.trackId = this.route.snapshot.paramMap.get("trackId");
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
