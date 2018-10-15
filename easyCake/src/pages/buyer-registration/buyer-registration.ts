import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';


import { User } from '../../providers';
import { MainPage } from '../';
/**
 * Generated class for the BuyerRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyer-registration',
  templateUrl: 'buyer-registration.html',
})

export class BuyerRegistrationPage {
  @ViewChild('fileInput') fileInput;

  account: {name: string, lastname: string, address: string,
    neighbourhood: string, city: string, numbercontact: number,
    email: string, password: string } = {


    name: 'Marcela',
    lastname: 'Avila',
    address: 'Cr 69 bis',
    neighbourhood: 'Carvajal',
    city: 'Bogota',
    numbercontact: 123456789,
    email: 'test@example.com',
    password: 'test'
  };

  sex;
  sexForm;


  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public alerCtrl: AlertController,
              public toastCtrl: ToastController,
              formBuilder: FormBuilder,
              public camera: Camera,
              public translateService: TranslateService) {

                this.form = formBuilder.group({
                  profilePic: [''],
                  name: ['', Validators.required],
                  lastname: ['', Validators.required],
                  address: ['', Validators.required],
                  neighbourhood: ['', Validators.required],
                  city: ['', Validators.required],
                  numbercontact: ['', Validators.required],
                  email: ['', Validators.required],
                  password: ['', Validators.required],
                });

                this.sexForm = new FormGroup({
                  "sex": new FormControl({value: 'fem', disabled: false})
                });

        }

        doSubmit(event) {
          console.log('Submitting form', this.sexForm.value);
          event.preventDefault();
      }


          doAlert() {
            let alert = this.alerCtrl.create({
              title: '¡Felicidades!',
              message: 'Ya puedes hacer uso de nuestra plataforma!',
              buttons: ['OK']
            });
            alert.present();
          }

  doSignup() {

    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

}
