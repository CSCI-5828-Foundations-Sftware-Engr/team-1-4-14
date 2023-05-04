import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { SongService } from 'src/services/SongService';

@Component({
  selector: 'app-popular-songs',
  templateUrl: './popular-songs.component.html',
  styleUrls: ['./popular-songs.component.scss']
})
export class PopularSongsComponent {
    songsData$ = new BehaviorSubject<any>({});
    artistsData$ = new BehaviorSubject<any>({});
    basicOptions: any;
    popularSongs$!: Observable<any>;
    popularArtists$!: Observable<any>;

    constructor(private songSerice: SongService) {}

    ngOnInit() {
        let popularSongLabels: any[] = [];
        let popularSongCounts: any[] = [];
        let popularArtistsLabels: any[] = [];
        let popularArtistsCounts: any[] = [];
        this.popularSongs$ = this.songSerice.getPopularSongsByViews();
        this.popularArtists$ = this.songSerice.getPopularSongsByArtists();
        combineLatest(this.popularSongs$, this.popularArtists$).subscribe(([popularSongs, popularArtists]) => {
          for (let i = 0; i < 10; i++) {
            popularSongLabels.push(popularSongs[i].songName);
            popularSongCounts.push(popularSongs[i].songViews);
            popularArtistsLabels.push(popularArtists[i].artistName);
            popularArtistsCounts.push(popularArtists[i].artistViews);
          }
          this.songsData$.next(this.getGraphData(popularSongLabels, popularSongCounts, 'Popular Songs'));
          this.artistsData$.next(this.getGraphData(popularArtistsLabels, popularArtistsCounts, 'Popular Artists'));
        })

        
    }

    getGraphData(labels: any[], counts: any[], label: string) {
      return {
        labels: labels,
        datasets: [
            {
                label: label,
                data: counts,
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
      };
    }

    setGraphOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
      };
    }
}