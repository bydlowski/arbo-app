import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';

import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = TabsPage;
  rootPage: any;
  loader: any;

  constructor(platform: Platform, public auth: Auth, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.presentLoading()

    this.auth.login().then((isLoggedIn) => {
      if (isLoggedIn) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }

      this.loader.dismiss();
    });  
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Autenticando..."
    });
    this.loader.present();
  }
}
