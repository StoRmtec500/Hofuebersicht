import { Component } from '@angular/core';
import { SheepProvider } from './../../providers/sheep/sheep';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SchafdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'schafDetail'
})
@Component({
  selector: 'page-schafdetail',
  templateUrl: 'schafdetail.html',
})
export class SchafdetailPage {

sheepDetail:any;
sheepnummer; ama; vaternr; mutternr; geburtsdatum; geschlecht; verwendung; merkmal; bemerkung: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sheepservice: SheepProvider, private toastCtrl: ToastController) {
  this.sheepDetail = null; 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchafdetailPage');
    this.getSheepDetail();

  }

  ionViewDidLeave(){
   this.sheepDetail = null;
  }

closeModal() {
        this.navCtrl.pop();
    }

  getSheepDetail() {
    let schafdetailnr = this.navParams.get('schafnr');
    this.sheepservice.sheepDetail(schafdetailnr)
  .then(data => {
    this.sheepDetail = data;
    console.log("Schafdetail " + data);
     if(this.sheepDetail['0'].status == 401) {
        this.presentToast(this.sheepDetail['0'].message);
      } else {
        this.sheepDetail;
        console.log('Schafdetail', this.sheepDetail['0'].schaf_nr);
        //this.loading.dismiss();
        this.sheepnummer = this.sheepDetail['0'].schaf_nr;
        this.ama = this.sheepDetail['0'].ama_nummer;
        this.vaternr = this.sheepDetail['0'].vater_nr;
        this.mutternr = this.sheepDetail['0'].mutter_nr;
        this.geburtsdatum = this.sheepDetail['0'].geburtsdatum;
        this.geschlecht = this.sheepDetail['0'].geschlecht;
        this.verwendung = this.sheepDetail['0'].verwendung;
        this.merkmal = this.sheepDetail['0'].merkmal;
        this.bemerkung = this.sheepDetail['0'].bemerkung;

      }
    }, (err) => {
    //  this.loading.dismiss();
      this.presentToast(err);
    });
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
