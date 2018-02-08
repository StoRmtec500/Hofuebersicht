import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchafdetailPage } from './schafdetail';

@NgModule({
  declarations: [
    SchafdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SchafdetailPage),
  ],
  exports: [
    SchafdetailPage
  ]
})
export class SchafdetailPageModule {}
