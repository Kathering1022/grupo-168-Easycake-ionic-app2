import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
/**
 * Generated class for the BusinessRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-registration',
  templateUrl: 'business-registration.html',
})
export class BusinessRegistrationPage {

  account: { nit: number, name: string, activity: string, address: string,
    neighbourhood: string, city: string, numbercontact: number,
    email: string, web: string } = {
    nit: 900405245,
    name: 'Test Business',
    activity: 'test',
    address: 'test',
    neighbourhood: 'test',
    city: 'test',
    numbercontact: 123456,
    email: 'test@example.com',
    web: 'test'

  };
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public alerCtrl: AlertController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('Error').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: '¡Felicidades!',
      message: 'Tu negocio a sido registrado correctamente!',
      buttons: ['OK']
    });
    alert.present();
  }

}
