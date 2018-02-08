import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchafVerkaufPage } from './schaf-verkauf';

@NgModule({
  declarations: [
    SchafVerkaufPage,
  ],
  imports: [
    IonicPageModule.forChild(SchafVerkaufPage),
  ],
  exports: [
    SchafVerkaufPage
  ]
})
export class SchafVerkaufPageModule {}
