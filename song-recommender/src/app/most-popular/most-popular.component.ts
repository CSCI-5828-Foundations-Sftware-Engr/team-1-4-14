import { Component } from '@angular/core';
import { Song } from 'src/interfaces/Song';
import { SongService } from 'src/services/SongService';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent {
  songs: Song[] = [];

  cols: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
      this.songService.getPopularSongs().then((data) => {
          this.songs = data;
      });
  }

  getSeverity(status: string) {
      switch (status) {
          case 'Rock':
              return 'success';
          case 'Jazz':
              return 'warning';
          default: return 'success';
      }
  }
}
