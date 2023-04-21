import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsGridComponent } from './songs-grid/songs-grid.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SongService } from 'src/services/SongService';
import { MostPopularComponent } from './most-popular/most-popular.component';


@NgModule({
  declarations: [
    AppComponent,
    SongsGridComponent,
    MostPopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    TagModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
