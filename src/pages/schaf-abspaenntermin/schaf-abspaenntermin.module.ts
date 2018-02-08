import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchafAbspaennterminPage } from './schaf-abspaenntermin';

@NgModule({
  declarations: [
    SchafAbspaennterminPage,
  ],
  imports: [
    IonicPageModule.forChild(SchafAbspaennterminPage),
  ],
  exports: [
    SchafAbspaennterminPage
  ]
})
export class SchafAbspaennterminPageModule {}
