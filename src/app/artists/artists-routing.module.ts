import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistCuratedTrackYoutubePlayerComponent } from './artist-curated-track-youtube-player/artist-curated-track-youtube-player.component';
import { ArtistTrackYoutubePlayerComponent } from './artist-track-youtube-player/artist-track-youtube-player.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ArtistListComponent },
  { path: ":id", component: ArtistDetailsComponent },
  { path: ":id/:trackUrl", component: ArtistCuratedTrackYoutubePlayerComponent },
  { path: ":id/:albumId/:trackId/:trackUrl", component: ArtistTrackYoutubePlayerComponent }

  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ArtistsRoutingModule { }
