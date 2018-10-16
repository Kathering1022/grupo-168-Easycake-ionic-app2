import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyerRegistrationPage } from './buyer-registration';



@NgModule({
  declarations: [
    BuyerRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyerRegistrationPage),
  ],
  exports: [
    BuyerRegistrationPage
  ]
})
export class BuyerRegistrationPageModule {}
