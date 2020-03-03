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
  trackId: number;
  trackUrl: string;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {

    this.trackUrl = this.route.snapshot.paramMap.get("trackUrl");

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
