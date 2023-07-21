import { Component, Input } from '@angular/core';
import { MovieServiceTsService } from '../services/movie.service.ts.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  @Input() movieId!: number;
  movieDetails: any;
  constructor(private route: ActivatedRoute,private movieService:MovieServiceTsService,private http: HttpClient,private router: Router) {}


  ngOnInit(): void {
    console.log('thiisss',this.movieId);
    
    this.route.paramMap.subscribe(params => {
      const movieIdParam = params.get('id');
      if (movieIdParam) {
        this.movieId = +movieIdParam;
        console.log('id',this.movieId);
        
        this.fetchMovieDetails();
      }
    });
  }

  fetchMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(
      (data) => {
        this.movieDetails = data;
        console.log('detailos',this.movieDetails);
        console.log('detailos',this.movieDetails.homepage); 
      },
   
    );
  }
  watchTrailer(){
    window.location.href = this.movieDetails.homepage 
  }

}
