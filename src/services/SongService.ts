import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';
import { ApiConfigService } from './ApiConfigService';
    
@Injectable({
    providedIn: 'root'
})
export class SongService {
    constructor(private apiService: ApiService, private apiConfigService: ApiConfigService) { }

    getSongs() {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/songs');
    }

    getSongInfo(trackId: string) {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/songs/' + trackId);
    }

    getPopularSongs() {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/spotify/songs')
    }

    getPopularSongsByViews() {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/popular/songs')
    }

    getPopularSongsByArtists() {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/popular/artists')
    }

    getSongYear() {
        return Math.floor(Math.random()*20) + 1995;
    }

};

