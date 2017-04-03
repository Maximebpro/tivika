import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';
import { Movie } from "../movie/movie";

@Component({
  selector: 'homepage',
  templateUrl: 'home.html'
})
export class Home {
  public movies;

  constructor(public navCtrl: NavController, http: Http) {
    http.get('/api')
      .map(res => res.json().results)
      .subscribe(movies => {
        movies.forEach(movie => {
          movie.poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
          movie.backdrop = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
        });
        console.log(movies);
        this.movies = movies;
      });
  }

  displayMovie(movie) {
    this.navCtrl.push(Movie, movie);
  }
}
