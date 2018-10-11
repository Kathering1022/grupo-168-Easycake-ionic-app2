import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the CreateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
   name: 'page-create-product',
   segment: 'page-create-product'
 })
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})

export class CreateProductPage {

    @ViewChild('fileInput') fileInput;

    isReadyToSave: boolean;

    item: any;

    form: FormGroup;
    testCheckboxOpen: boolean;
    testCheckboxResult;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public alertCtrl: AlertController, formBuilder: FormBuilder, public camera: Camera) {
      this.form = formBuilder.group({
        profilePic: [''],
        name: ['', Validators.required],
        //ingredient: [''],
        additional: ['', Validators.required],
        cost: ['', Validators.required],
        portions: ['', Validators.required],
        about: ['']
      });

      // Watch the form for changes, and
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });
    }

    ionViewDidLoad() {

    }

    createItem(){
      if(this.form.valid){
        console.log("Ok ingreso");
      }
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


    doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige los ingredientes de tu producto');

    alert.addInput({
      type: 'checkbox',
      label: 'Bizcocho',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cocoa',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Queso crema',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cafe',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chantilly',
      value: 'value5'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

  }
