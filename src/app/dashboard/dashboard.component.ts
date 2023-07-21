import { Component } from '@angular/core';
import { MovieServiceTsService } from '../services/movie.service.ts.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  popularMovies: any[] = [];
  movieId: any;
  // router: any;

  constructor(private movieService:MovieServiceTsService,private http: HttpClient,private router: Router) {}


  ngOnInit(): void {
    this.fetchPopularMovies();
  }

  fetchPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe((res) => {
      console.log('res',res);
      
      this.popularMovies = res.results
      console.log('movies',this.popularMovies); 
    }
    )
}
showdetails(movieId: number): void {
  this.router.navigate(['/details', movieId]);
}
// fetchMovieDetails(): void {
//   this.movieService.getMovieDetails(this.popularMovies.movie.id).subscribe(
//     (data) => {
//       this.movieDetails = data;
//     }
//   );
// }
// getAllUserExperience() {
//   this.networkService.getAllUserExperience().subscribe((res) => {
//     console.log('experience', res);
//     this.allExperience = res;
//     if(this.allExperience.length > 0){
//       this.addMore = true
//     }
//   });
// }
}
