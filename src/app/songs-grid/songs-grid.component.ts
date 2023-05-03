import { Component, OnInit } from '@angular/core';
import { Song } from '../../interfaces/Song';
import { SongService } from '../../services/SongService';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-songs-grid',
  templateUrl: './songs-grid.component.html',
  styleUrls: ['./songs-grid.component.scss']
})
export class SongsGridComponent implements OnInit{
    songs$!: Observable<any>;

    cols: any[] = [];

    constructor(private songService: SongService, private router: Router) {}

    ngOnInit() {
        this.songs$ = this.songService.getSongs();
    }

    showSongInfo(event: any) {
        this.router.navigate(['/song', event.data.trackId]);
    }
 
    getYear() {
        return this.songService.getSongYear();
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