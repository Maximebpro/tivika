import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

enum Rate {
  None = undefined,
  Hate = 0,
  Dislike,
  Like,
  Love
}

const RateTypes = [Rate.None, Rate.Hate, Rate.Dislike, Rate.Like, Rate.Love]

@Component({
  selector: 'movie-page',
  templateUrl: 'movie.html'
})
export class MoviePage {
  movie: any;
  rate: Rate;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.data;
    console.log('movie', this.movie);
  }

  public isRated(rateType: string) {
    return this.rate === Rate[rateType];
  }

  public onRate(rateType: string) {
    if (this.rate === Rate[rateType]) {
      this.rate = Rate.None;
    } else {
      this.rate = Rate[rateType];
    }
  }
}
