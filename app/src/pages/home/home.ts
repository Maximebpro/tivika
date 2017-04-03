import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

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
          movie.picture = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
        });
        console.log(movies);
        this.movies = movies;
      });
  }
}
