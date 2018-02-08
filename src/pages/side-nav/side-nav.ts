import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SideNavPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'SideNavPage'
})
@Component({
  selector: 'page-side-nav',
  templateUrl: 'side-nav.html',
})
export class SideNavPage {
rootPage :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public homePage: HomePage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideNavPage');
  }

  abspaenntermin(){
    this.homePage.setPageToLoad('schafAbspaenntermin');
  }

  ablammtermin(){
    this.homePage.setPageToLoad('schafAblammtermin');
  }

  schafverkauf() {
    this.homePage.setPageToLoad('schafVerkauf');
  }

}
