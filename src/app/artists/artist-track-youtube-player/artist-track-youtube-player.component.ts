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
  trackUrl: Track;
  trackId: any;

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
