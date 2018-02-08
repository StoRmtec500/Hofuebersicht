import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchafAblammterminPage } from './schaf-ablammtermin';

@NgModule({
  declarations: [
    SchafAblammterminPage,
  ],
  imports: [
    IonicPageModule.forChild(SchafAblammterminPage),
  ],
  exports: [
    SchafAblammterminPage
  ]
})
export class SchafAblammterminPageModule {}
