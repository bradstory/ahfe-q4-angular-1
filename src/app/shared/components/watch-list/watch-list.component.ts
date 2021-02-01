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
  watchList: Movie[] = [];

  ngOnInit(): void {
    this.watchList = this.service.getFavs();
    // this.service.getMovie().subscribe((data: any) => {
    //   for (let obj of data.results) {
    //     let newMovie: Movie = {
    //       title: obj.title,
    //       overview: obj.overview,
    //       poster_path: obj.poster_path,
    //       rating: obj.rating,
    //       release_date: obj.release_date,
    //       vote_average: obj.vote_average,
    //       id: obj.id,
    //       runtime: obj.runtime,
    //       tagline: obj.tagline,
    //       backdrop_path: obj.backdrop_path,
    //     };
    //     this.watchList.push(newMovie);
    //   }
    console.log(this.watchList);
    // });

    // title: string;
    // overview: string;
    // poster: string;
    // rating: number;
    // voteAverage: number;
    // id: number;
  }

}
