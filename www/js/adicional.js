import { AlertController } from 'ionic-angular';

export class MyPage {

  constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Felicidades!',
      subTitle: 'Ya puedes hacer uso de nuestra plataforma!',
      buttons: ['OK']
    });
    alert.present();
  }
}
