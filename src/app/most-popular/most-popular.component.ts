import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/interfaces/Song';
import { SongService } from 'src/services/SongService';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent {
  popularSongs$!: Observable<any>;


  constructor(private songService: SongService) {}

  ngOnInit() {
    this.popularSongs$ = this.songService.getPopularSongs();
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
