import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artistsArray: Artist[];

  constructor() { }

  ngOnInit(): void {
    this.artistsArray = [
      {
        id: 1,
        name: "Adventure Club",
        hometown: "Montreal, Quebec",
        genre: "Dubstep, Melodic Bass",
        url: "https://weareadventureclub.com/"
      },
      {
        id: 2,
        name: "Tiesto",
        hometown: "Breda, Netherlands",
        genre: "House, Progressive House",
        url: "https://www.tiesto.com/"
      },
      {
        id: 3,
        name: "Seven Lions",
        hometown: "Santa Barbara, California",
        genre: "House, Melodic Bass",
        url: "https://sevenlions.com/"
      },
      {
        id: 4,
        name: "DeadMau5",
        hometown: "Montreal, Quebec",
        genre: "Electro House, Techno",
        url: "http://www.deadmau5.com/"
      },
      {
        id: 5,
        name: "Flume",
        hometown: "Sydney, Australia",
        genre: "Electronica, Future Bass",
        url: "https://flumemusic.com/"
      },
      {
        id: 6,
        name: "DROELOE",
        hometown: "unknown, Netherlands",
        genre: "Melodic Bass, Future House",
        url: "https://droeloe.com/"
      },
      {
        id: 7,
        name: "Above and Beyond",
        hometown: "London, United Kingdom",
        genre: "Trance, Progressive House",
        url: "https://www.aboveandbeyond.nu/"
      },
      {
        id: 8,
        name: "Hermitude",
        hometown: "	Blue Mountains, Australia",
        genre: "Electronic, Trap",
        url: "https://www.hermitude.com/"
      },
      {
        id: 9,
        name: "MitiS",
        hometown: "West Chester, Pennsylvania",
        genre: "Melodic Bass, Heaven Trap",
        url: "https://www.facebook.com/Mitismusic/"
      },
      {
        id: 10,
        name: "ODESZA",
        hometown: "Bellingham, Washington",
        genre: "Indietronica, Future Bass",
        url: "https://odesza.com/"
      }
    ];

    console.log(this.artistsArray);
  }



}
