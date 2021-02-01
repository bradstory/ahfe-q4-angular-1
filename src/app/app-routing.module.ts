import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './shared/components/movie-detail/movie-detail.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { WatchListComponent } from './shared/components/watch-list/watch-list.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-list/:id', component: MovieDetailComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
