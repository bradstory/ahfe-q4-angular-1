import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  listofmovies: Movie[] = [];
  favList: Movie[] = [];
  @Input() searchQuery: string = '';
  @Input() movieList: Movie[] = [];
  constructor(private service: MoviesService, private router: Router) { }

  ngOnInit(): void {
    // this.favList = this.service.getFavs();
    // this.service.getMovie().subscribe((data: any) => {
    //   this.listofmovies = data.results;
    //   console.log(this.listofmovies);
    // });
  }
  addToFavs(movie: Movie) {
    let foundMovie: Movie | undefined = this.favList.find(
      (item) => item.id === movie.id
    );
    if (foundMovie) {
      let index = this.favList.findIndex((fav: Movie) => fav.id === movie.id);
      this.favList.splice(index, 1);
      this.service.setFavs(this.favList);
    } else {
      this.favList.push(movie);
      this.service.setFavs(this.favList);
    }
    console.log(this.favList);
  }
}
