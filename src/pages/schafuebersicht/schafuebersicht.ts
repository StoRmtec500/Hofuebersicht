
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchafuebersichtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'Schafuebersicht'
})
@Component({
  selector: 'page-schafuebersicht',
  templateUrl: 'schafuebersicht.html',
})
export class SchafuebersichtPage {

  sideRoot = 'SideNavPage';
  mainPage = 'StallSchafePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchafuebersichtPage');
  }

}
