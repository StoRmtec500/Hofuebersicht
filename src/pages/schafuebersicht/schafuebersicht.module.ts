import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchafuebersichtPage } from './schafuebersicht';

@NgModule({
  declarations: [
    SchafuebersichtPage,
  ],
  imports: [
    IonicPageModule.forChild(SchafuebersichtPage),
  ],
  exports: [
    SchafuebersichtPage
  ]
})
export class SchafuebersichtPageModule {}
