import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'primeng/chart';
import { PopularSongsComponent } from './popular-songs.component';
import { SongService } from 'src/services/SongService';

describe('PopularSongsComponent', () => {
  let component: PopularSongsComponent;
  let fixture: ComponentFixture<PopularSongsComponent>;
  const songServiceStub = {getPopularSongsByViews: () => {}, getPopularSongsByArtists: () => {}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [ PopularSongsComponent ],
      providers: [ { provide: SongService, useValue: songServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
