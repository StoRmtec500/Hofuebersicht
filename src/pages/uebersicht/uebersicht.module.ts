import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UebersichtPage } from './uebersicht';

@NgModule({
  declarations: [
    UebersichtPage,
  ],
  imports: [
    IonicPageModule.forChild(UebersichtPage),
  ],
  exports: [
    UebersichtPage
  ]
})
export class UebersichtPageModule {}
