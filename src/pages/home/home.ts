import { Component} from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage(
{
name: 'HomePage'
}
)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //rootPage = 'Schaf';
  sideRoot = 'SideNavPage';
  public mainPage = 'Schafuebersicht';
//

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter(){

  }

  home() {
      this.navCtrl.setRoot('uebersicht');
  }

  public setPageToLoad(pagename) {
    this.mainPage = (pagename);
  }

}
