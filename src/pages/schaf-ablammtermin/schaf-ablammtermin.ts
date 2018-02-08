import { SheepProvider } from './../../providers/sheep/sheep';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SchafAblammterminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'schafAblammtermin'
})
@Component({
  selector: 'page-schaf-ablammtermin',
  templateUrl: 'schaf-ablammtermin.html',
  providers: [SheepProvider]
})
export class SchafAblammterminPage {

ablammTermine:any;
loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public loadingCtrl: LoadingController, private sheepservice: SheepProvider) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchafAblammterminPage');
    this.showLoader();  
    this.getSheepAblammTermine();
  }

  getSheepAblammTermine() {
    
  this.sheepservice.sheepAblammTermin()
  .then(data => {
    this.ablammTermine = data;
    //this.loading.dismiss();
   if(this.ablammTermine['0'].status == 401) {
        this.presentToast(this.ablammTermine['0'].message);
      } else {
        this.ablammTermine;
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
