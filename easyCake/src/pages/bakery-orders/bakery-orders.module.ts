import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BakeryOrdersPage } from './bakery-orders';

@NgModule({
  declarations: [
    BakeryOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(BakeryOrdersPage),
  ],
})
export class BakeryOrdersPageModule {}
