import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { SheepProvider } from './../../providers/sheep/sheep';


/**
 * Generated class for the SchafAbspaennterminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'schafAbspaenntermin'
})
@Component({
  selector: 'page-schaf-abspaenntermin',
  templateUrl: 'schaf-abspaenntermin.html',
  providers: [SheepProvider]
})



export class SchafAbspaennterminPage {

loading:any;

  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public loadingCtrl: LoadingController, private sheepservice: SheepProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchafAbspaennterminPage');
    
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
