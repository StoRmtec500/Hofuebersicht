import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Events } from 'ionic-angular';



/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'MainPage'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
 // root:any = 'MainPage';
  displayName;


  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, public events: Events) {
  
}


}
