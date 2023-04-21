import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { SongsGridComponent } from './songs-grid/songs-grid.component';

const routes: Routes = [
    { path: '', component: SongsGridComponent },
    { path: 'most-popular', component: MostPopularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
