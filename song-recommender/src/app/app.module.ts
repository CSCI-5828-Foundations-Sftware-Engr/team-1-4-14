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
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/services/ApiService';
import { ApiConfigService } from 'src/services/ApiConfigService';


@NgModule({
  declarations: [
    AppComponent,
    SongsGridComponent,
    MostPopularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    TagModule
  ],
  providers: [SongService, ApiService, ApiConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
