import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistTrackYoutubePlayerComponent } from './artist-track-youtube-player/artist-track-youtube-player.component';
import { RouterModule } from '@angular/router';
import { ArtistCuratedTrackYoutubePlayerComponent } from './artist-curated-track-youtube-player/artist-curated-track-youtube-player.component';

@NgModule({
  declarations: [ArtistListComponent, ArtistCardComponent, ArtistDetailsComponent, ArtistTrackYoutubePlayerComponent, ArtistCuratedTrackYoutubePlayerComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    ArtistsRoutingModule,
    RouterModule
  ]
})
export class ArtistsModule { }
