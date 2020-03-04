import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCuratedTrackYoutubePlayerComponent } from './artist-curated-track-youtube-player.component';

describe('ArtistCuratedTrackYoutubePlayerComponent', () => {
  let component: ArtistCuratedTrackYoutubePlayerComponent;
  let fixture: ComponentFixture<ArtistCuratedTrackYoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistCuratedTrackYoutubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCuratedTrackYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
