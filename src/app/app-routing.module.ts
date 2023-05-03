import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { SongsGridComponent } from './songs-grid/songs-grid.component';
import { SongInfoComponent } from './song-info/song-info.component';

const routes: Routes = [
    { path: '', component: SongsGridComponent },
    { path: 'most-popular', component: MostPopularComponent },
    { path: 'song/:id', component: SongInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
