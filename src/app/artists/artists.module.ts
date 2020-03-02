import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { RouterModule } from '@angular/router';
import { ArtistTrackYoutubePlayerComponent } from './artist-track-youtube-player/artist-track-youtube-player.component';

@NgModule({
  declarations: [ArtistListComponent, ArtistCardComponent, ArtistDetailsComponent, ArtistTrackYoutubePlayerComponent],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    RouterModule
  ]
})
export class ArtistsModule { }
