import { Component, OnInit } from '@angular/core';
import { Song } from '../../interfaces/Song';
import { SongService } from '../../services/SongService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-songs-grid',
  templateUrl: './songs-grid.component.html',
  styleUrls: ['./songs-grid.component.scss']
})
export class SongsGridComponent implements OnInit{
    songs$!: Observable<any>;

    cols: any[] = [];

    constructor(private songService: SongService) {}

    ngOnInit() {
        this.songs$ = this.songService.getSongs();
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