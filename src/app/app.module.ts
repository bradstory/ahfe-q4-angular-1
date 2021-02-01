import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieDetailComponent } from './shared/components/movie-detail/movie-detail.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { WatchListComponent } from './shared/components/watch-list/watch-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailComponent,
    MovieListComponent,
    SearchComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
