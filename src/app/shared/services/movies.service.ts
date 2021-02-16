import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  watchList: Movie[] = [];
  searchQuery: string = '';
  masterFavList: Movie[] = [];
  apiKey: string = '5bb66be09b904cd9c1f452f029594012';

  getMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?',{
  params:{api_key: this.apiKey },
      
   });
    
  }
  getGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?', {
      params: { api_key: this.apiKey },
    });
  }
  searchMovies(searchQuery: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?', {
      params: { query: searchQuery, api_key: this.apiKey },
    });
  }
  searchYear(year: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
      params: { api_key: this.apiKey, primary_release_year: year}
    });
  }
  //This will give a list of movies that are greater than or equal to the rating given
  searchRating(rating: string) {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?', {
      params: { api_key: this.apiKey, 'vote_average.gte': rating }
    })
  }
  getAllGenres(filterGenre: string):Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?', {
      params: { api_key: this.apiKey, 'with_genres': filterGenre }
    })
  }

  getMovieById(id: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5bb66be09b904cd9c1f452f029594012&language=en-US`
    );
  }
  getFavs() {
    return this.masterFavList;
  }
  setFavs(array: Movie[]) {
    this.masterFavList = array;
  }


}
