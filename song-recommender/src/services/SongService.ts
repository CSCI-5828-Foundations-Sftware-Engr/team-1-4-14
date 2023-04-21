import { Injectable } from '@angular/core';
    
@Injectable()
export class SongService {
    getSongsData() {
        return [
            {
                "id": 0,
                "name": "Song 0",
                "artist": "Artist 0",
                "genre": "Rock"
            },
            {
                "id": 1,
                "name": "Song 1",
                "artist": "Artist 1",
                "genre": "Jazz"
            },
            {
                "id": 2,
                "name": "Song 2",
                "artist": "Artist 2",
                "genre": "Rock"
            },
            {
                "id": 3,
                "name": "Song 3",
                "artist": "Artist 3",
                "genre": "Jazz"
            },
            {
                "id": 4,
                "name": "Song 4",
                "artist": "Artist 4",
                "genre": "Rock"
            },
            {
                "id": 5,
                "name": "Song 5",
                "artist": "Artist 0",
                "genre": "Jazz"
            },
            {
                "id": 6,
                "name": "Song 6",
                "artist": "Artist 1",
                "genre": "Rock"
            },
            {
                "id": 7,
                "name": "Song 7",
                "artist": "Artist 2",
                "genre": "Jazz"
            },
            {
                "id": 8,
                "name": "Song 8",
                "artist": "Artist 3",
                "genre": "Rock"
            },
            {
                "id": 9,
                "name": "Song 9",
                "artist": "Artist 4",
                "genre": "Jazz"
            },
            {
                "id": 10,
                "name": "Song 10",
                "artist": "Artist 0",
                "genre": "Rock"
            },
            {
                "id": 11,
                "name": "Song 11",
                "artist": "Artist 1",
                "genre": "Jazz"
            },
            {
                "id": 12,
                "name": "Song 12",
                "artist": "Artist 2",
                "genre": "Rock"
            },
            {
                "id": 13,
                "name": "Song 13",
                "artist": "Artist 3",
                "genre": "Jazz"
            },
            {
                "id": 14,
                "name": "Song 14",
                "artist": "Artist 4",
                "genre": "Rock"
            },
            {
                "id": 15,
                "name": "Song 15",
                "artist": "Artist 0",
                "genre": "Jazz"
            },
            {
                "id": 16,
                "name": "Song 16",
                "artist": "Artist 1",
                "genre": "Rock"
            },
            {
                "id": 17,
                "name": "Song 17",
                "artist": "Artist 2",
                "genre": "Jazz"
            },
            {
                "id": 18,
                "name": "Song 18",
                "artist": "Artist 3",
                "genre": "Rock"
            },
            {
                "id": 19,
                "name": "Song 19",
                "artist": "Artist 4",
                "genre": "Jazz"
            },
            {
                "id": 20,
                "name": "Song 20",
                "artist": "Artist 0",
                "genre": "Rock"
            },
            {
                "id": 21,
                "name": "Song 21",
                "artist": "Artist 1",
                "genre": "Jazz"
            },
            {
                "id": 22,
                "name": "Song 22",
                "artist": "Artist 2",
                "genre": "Rock"
            },
            {
                "id": 23,
                "name": "Song 23",
                "artist": "Artist 3",
                "genre": "Jazz"
            },
            {
                "id": 24,
                "name": "Song 24",
                "artist": "Artist 4",
                "genre": "Rock"
            },
            {
                "id": 25,
                "name": "Song 25",
                "artist": "Artist 0",
                "genre": "Jazz"
            },
            {
                "id": 26,
                "name": "Song 26",
                "artist": "Artist 1",
                "genre": "Rock"
            },
            {
                "id": 27,
                "name": "Song 27",
                "artist": "Artist 2",
                "genre": "Jazz"
            },
            {
                "id": 28,
                "name": "Song 28",
                "artist": "Artist 3",
                "genre": "Rock"
            },
            {
                "id": 29,
                "name": "Song 29",
                "artist": "Artist 4",
                "genre": "Jazz"
            }
        ]
    }

    getPopularSongs() {
        const rand = Math.random() * 20;
        return Promise.resolve(this.getSongsData().slice(rand, rand + 5));
    }

    getSongs() {
        return Promise.resolve(this.getSongsData());
    }
};

