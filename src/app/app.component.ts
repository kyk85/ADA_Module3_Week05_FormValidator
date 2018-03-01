import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContentPage } from '../pages/content/content';
import { RegistrationPage } from '../pages/registration/registration';

//Custom Import
import firebase from 'firebase'
import { firebaseConfig } from './credentials';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
      const unsubcsribe = firebase.auth().onAuthStateChanged(user =>{
        if(!user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = "ContentPage"
        }
      })
    });
  }
}

