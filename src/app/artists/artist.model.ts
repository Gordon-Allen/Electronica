export interface Artist {
  id: number;
  name: string;
  homecountry: string;
  genre: string;
  url: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  soundcloudUrl: string;
  youtubeUrl: string;
  curatedTrack: string;
  curatedTrackUrl: string;
  album: Album[];
}

export interface Album {
  id: number;
  artist: string;
  title: string;
  albumSpotifyUrl: string;
  albumAppleMusicUrl: string;
  releaseYear: number;
  trackCount: number;
  trackList: Track[];
}

export interface Track {
  trackId: number;
  trackTitle: string;
  trackLength: string;
  trackUrl: string;
}










