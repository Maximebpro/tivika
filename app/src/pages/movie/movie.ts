import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'moviepage',
  templateUrl: 'movie.html'
})
export class Movie {
  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.data;
    console.log('movie', this.movie);

  }
}
