import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie={
    title:'',
    overview:'',
    poster_path:'',
    rating:0,
    release_date: 0,
    vote_average:0,
    id:0,
    genres_ids:[],
    genres:[],
    runtime: 0,
    tagline: '',
    backdrop_path: '',

  };

  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x =>{
      const id =parseInt(x.id)
       console.log(`${id}id`);
       this.service.getMovieById(id).subscribe((response: any)=>{
        this.movie = response
        console.log(this.movie);
      })
        

       

    })
  }

}
