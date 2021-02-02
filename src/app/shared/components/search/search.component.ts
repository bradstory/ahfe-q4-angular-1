import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchQuery: string = '';
  results: any;
  movies: any;
  @Output() movieList: Movie[] = [];
  constructor(private service: MoviesService, private router:Router) { }

  searchResults() {
    this.service.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movieList = data['results'];
      console.log(this.movieList);
      

    });
  }




  ngOnInit(): void {
  }

}
