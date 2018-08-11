import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  // private loginErrorString: string;
  private loginSuccessString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    // this.translateService.get('LOGIN_ERROR').subscribe((value) => {
    //   this.loginErrorString = value;
    // })

    this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
      this.loginSuccessString = value;
    })
    
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      console.log(resp);
      
      this.navCtrl.push(MainPage);
    }, (err) => {
      console.log(err);
       this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginSuccessString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
