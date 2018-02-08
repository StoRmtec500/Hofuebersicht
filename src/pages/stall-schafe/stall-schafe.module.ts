import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StallSchafePage } from './stall-schafe';

@NgModule({
  declarations: [
    StallSchafePage,
  ],
  imports: [
    IonicPageModule.forChild(StallSchafePage),
  ],
  exports: [
    StallSchafePage
  ]
})
export class StallSchafePageModule {}
