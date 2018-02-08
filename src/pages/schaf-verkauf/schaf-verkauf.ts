import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController  } from 'ionic-angular';
import { SheepProvider } from './../../providers/sheep/sheep';

/**
 * Generated class for the SchafVerkaufPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'schafVerkauf'
} )
@Component({
  selector: 'page-schaf-verkauf',
  templateUrl: 'schaf-verkauf.html',
})
export class SchafVerkaufPage {

loading:any;
verkauf:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private sheepservice: SheepProvider) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchafVerkaufPage');
    this.showLoader();
    this.getVerkauf();
    
  }

  getVerkauf() {   
  this.sheepservice.sheepVerkauf()
  .then(data => {
    this.verkauf = data;
    //this.loading.dismiss();
   if(this.verkauf['0'].status == 401) {
        this.presentToast(this.verkauf['0'].message);
      } else {
        this.verkauf;
        this.loading.dismiss();
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
}

// Wird auf jeder Seite gebraucht wenn man den Loader und Fehlermeldung anzeigen möchte !!!
 showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Daten werden angefordert ...'
    });
    this.loading.present();
}

public presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom',
      dismissOnPageChange: true
});

toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
}

}
