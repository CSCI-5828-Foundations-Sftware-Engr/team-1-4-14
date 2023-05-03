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

    getPopularSongs() {
        return this.apiService.get(this.apiConfigService.apiUrl + 'api/v1/spotify/songs')
    }

};

