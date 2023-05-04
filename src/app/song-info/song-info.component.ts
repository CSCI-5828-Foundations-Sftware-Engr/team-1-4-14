import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SongService } from 'src/services/SongService';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit{
  trackId!: string;
  songInfo$!: Observable<any>;
  songURL$ = new BehaviorSubject<string>("");
  albumURL$ = new BehaviorSubject<string>("");
  trendsMap$ = new BehaviorSubject<string>("");
  trendsTime$ = new BehaviorSubject<string>("");

  constructor(private route: ActivatedRoute, private songService: SongService, private router: Router) {}
  
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.trackId = this.route.snapshot.paramMap.get('id') as string;
    this.songInfo$ = this.songService.getSongInfo(this.trackId);
    this.songInfo$.subscribe(data => {
      if (data) {
        const songurl = "https://open.spotify.com/embed?uri=" + data.spotifyData.trackUri;
        this.songURL$.next(songurl);
        const albumurl = "https://open.spotify.com/embed?uri=" + data.spotifyData.albumUri;
        this.albumURL$.next(albumurl);
        const trendsMap = 'https://trends.google.com:443/trends/embed/explore/GEO_MAP?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22'+ data.spotifyData.trackName +'%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-480&geo%3D%26date%3Dtoday%2012-m';
        this.trendsMap$.next(trendsMap);
        const trendsTime = 'https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22'+ data.spotifyData.trackName +'%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%205-y%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-480&geo%3D%26date%3Dtoday%205-y';
        this.trendsTime$.next(trendsTime);  
      }
    });
  }

  showSongInfo(event: any) {
    this.router.navigate(['/song', event.data.trackId]);
  }

  getYear() {
    return this.songService.getSongYear();
  }
}
