import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ArtistListComponent },
  { path: ":id", component: ArtistDetailsComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ArtistsRoutingModule { }
