import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTrackYoutubePlayerComponent } from './artist-track-youtube-player.component';

describe('ArtistTrackYoutubePlayerComponent', () => {
  let component: ArtistTrackYoutubePlayerComponent;
  let fixture: ComponentFixture<ArtistTrackYoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTrackYoutubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTrackYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
