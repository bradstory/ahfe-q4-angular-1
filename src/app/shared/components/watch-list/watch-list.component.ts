import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  constructor(private service: MoviesService) { }
  masterFavList: Movie[] = [];

  ngOnInit(): void {
    this.masterFavList = this.service.getFavs();
    
    console.log(this.masterFavList);
    
  }


  removeMovie(movie: Movie) {
    let index =this.masterFavList.findIndex((fav: Movie) => fav.id === movie.id);
 
    this.masterFavList.splice(index,1);
  }


}
