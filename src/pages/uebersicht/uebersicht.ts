import { SheepProvider } from './../../providers/sheep/sheep';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { Network } from '@ionic-native/network';


import * as moment from 'moment';
/**
 * Generated class for the UebersichtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'uebersicht'
})
@Component({
  selector: 'page-uebersicht',
  templateUrl: 'uebersicht.html',

  providers: [AuthServiceProvider, SheepProvider]
})
export class UebersichtPage {

root = 'UebersichtPage';

 myDate = moment(new Date().toISOString()).locale('de').format('LLLL');
username: string;
sheepcounter:string = '-';
restData;
public loading:any;
ablammTermine:any;
sheepDetail:any;
myDate1: Date;
link; string = null;
networkl: string;

color:any;


  constructor(private network: Network, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public events: Events, public loadingCtrl: LoadingController, private authservice: AuthServiceProvider, private sheepservice: SheepProvider) {
   setInterval(() => {
     this.myDate = moment(new Date().toISOString()).locale('de').format('LLLL');
   }, 10000)
       this.networkl = window.localStorage.getItem('network');
   //this.navCtrl.setRoot('uebersicht');     
}

isAlreadyLoggedIn() {
    let token = window.localStorage.getItem('token');
    return token !== null && token !== undefined;
}

ionViewDidEnter(){
    this.network.onConnect().subscribe(data => {
      console.log(data)
 this.displayNetworkUpdate(data.type)
 }, error => console.error(error));
    this.network.onDisconnect().subscribe(data => {
      console.log(data)
 this.displayNetworkUpdate(data.type)
}, error => console.error(error));

}

displayNetworkUpdate(connectionState: string) {
  let networkType = this.network.type;
  
  this.toastCtrl.create({
    message: `Du bist ${connectionState} via ${networkType}`,
    duration: 3000
  }).present();
}

ionViewDidLoad() {
    if(!this.isAlreadyLoggedIn()){
      this.navCtrl.setRoot('LoginPage');
    }
    if(this.networkl == 'wifi'){
      this.link = 'intern verbunden';
    } else {
      this.link = 'extern verbunden';
    }

    this.username = window.localStorage.getItem('username');
    window.localStorage.setItem('network', this.network.type);
    this.getSheepCount();
    this.getSheepAblammTermine();
   // this.getSheepDetail();
}

getSheepCount() {
  //  this.showLoader();
    this.sheepservice.count()
    .then(data => {
      this.restData = data;
      if(this.restData['0'].status == 401) {
        this.presentToast(this.restData['0'].message);
      } else {
        this.sheepcounter = this.restData['0'].message;
      }
    }, (err) => {
      this.presentToast(err);
    });
}

getSheepAblammTermine() {
   this.showLoader();
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

home() {
    //this.navCtrl.setRoot(UebersichtPage);
  }

logout() {
   this.authservice.logout();
}

stall_schaf() {
  this.navCtrl.setRoot('HomePage');
  //   let modal = this.modalCtrl.create(HomePage);
  //  modal.present();
}

show_sheep() {
  //this.getSheepDetail();
}

getSheepDetail(schafdetailnr: string) {
     // let schafnr = schafdetailnr;
        let sheepDetail = this.modalCtrl.create('schafDetail', {schafnr: schafdetailnr});
        //sheepDetail.present();

        sheepDetail.onDidDismiss(() => 
        console.log('Dismiss Modal')
        );
        sheepDetail.present();
}



public showLoader() {
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
