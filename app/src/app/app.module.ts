import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviePage } from "../pages/movie/movie";
import { Header } from "../components/header/header";

export const firebaseConfig = {
  apiKey: "AIzaSyBSteBccENtyaZmTVE8dGWWLPwuD9olQwU",
  authDomain: "tivika-d0152.firebaseapp.com",
  databaseURL: "https://tivika-d0152.firebaseio.com",
  projectId: "tivika-d0152",
  storageBucket: "",
  messagingSenderId: "985199332925"
};

@NgModule({
  declarations: [
    MyApp,
    Header,
    HomePage,
    MoviePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Header,
    HomePage,
    MoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
