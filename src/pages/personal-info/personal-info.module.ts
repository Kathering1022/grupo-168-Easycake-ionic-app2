import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalInfoPage } from './personal-info';


@NgModule({
  declarations: [
    PersonalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalInfoPage),
    TranslateModule.forChild()
  ],
})
export class PersonalInfoPageModule {}
