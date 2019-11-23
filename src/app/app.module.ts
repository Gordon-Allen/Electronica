import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistCardComponent } from './artists/artist-card/artist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
