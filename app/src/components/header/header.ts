import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'tvk-header',
  templateUrl: 'header.html',
  providers: [AngularFireAuth]
})
export class Header {
  public session: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.session = null;
        return;
      }
      this.session = user;
    });

  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
