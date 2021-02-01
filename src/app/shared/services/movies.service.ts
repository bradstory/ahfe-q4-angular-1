import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

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
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=491fce3e7b5d80f3fe62f2519a9e927a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    //   return this.http.get("https://api.themoviedb.org/3/discover/movie?",{
    //     params:{api_key:this.apiKey}
    // });
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
