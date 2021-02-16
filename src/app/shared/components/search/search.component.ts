import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { GenreList } from '../../models/genreList'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   rating: string = '';
   year: string = '';
   searchQuery: string = '';
   filterGenre:string ='';
   movieList: Movie[] = [];
   genreList:GenreList[]=[];
  constructor(private service: MoviesService, private router:Router) { }

  searchResults() {
    this.service.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movieList = data['results'];
      console.log(this.movieList);
    });
  }

  searchByYear() {
    this.service.searchYear(this.year).subscribe((data: any) => {
      this.movieList = data['results'];
    })
  }
  
  ratingSearch() {
    this.service.searchRating(this.rating).subscribe((data:any) => {
      this.movieList = data['results'];
    })
  }
  


  ngOnInit(): void {
    this.service.getGenres().subscribe((response:any) => {
      this.genreList =response.genres; 
    });
  }

  searchGenres() {
   this.service.getAllGenres(this.filterGenre).subscribe((response: any)=>{
   this.movieList = response['results'];
    
   }); 

  }

}
