import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { Register } from '../';
import { InfoPersonal } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string, username: string} = {
    username: 'Wilmer',
    email: '',
    password: '123'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public alerCtrl: AlertController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
 doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(InfoPersonal);
    }, (err) => {
      this.navCtrl.push(InfoPersonal);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
}

doSingUp() {
  let alert = this.alerCtrl.create({
      title: '¡Para empezar!',
      message: '¿Qué quieres hacer?',
      buttons: [{
        text:'Vender',
        handler: ()=>{this.navCtrl.push(Register);}
      },{
        text:'Comprar',
        handler: ()=>{this.navCtrl.push(Register);}
      }]
    });
    alert.present();
}

}
