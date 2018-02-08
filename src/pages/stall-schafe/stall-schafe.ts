import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StallSchafePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'Schaf'
})
@Component({
  selector: 'page-stall-schafe',
  templateUrl: 'stall-schafe.html',
  providers:[AuthServiceProvider]
})
export class StallSchafePage {

root: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public element: ElementRef, private authService: AuthServiceProvider) {
  
 this.element.nativeElement;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StallSchafePage');
  }


  logout() {
   // this.authService.logout();
    this.navCtrl.pop();
  }

}
