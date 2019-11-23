import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [ArtistListComponent, ArtistCardComponent, ArtistDetailsComponent],
  imports: [
    CommonModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
