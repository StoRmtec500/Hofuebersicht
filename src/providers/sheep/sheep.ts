import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SheepProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

//let link = 'http://auinger.dyndns.org:8443/hofuebersicht/api/v1/';
//let linkintern = 'http://10.0.0.237:8443/hofuebersicht/api/v1/';
//let sheepdetailLinkintern = 'http://10.0.0.237:8443/hofuebersicht/api/v1/sheepDetail/';
//let sheepdetailLink = 'http://auinger.dyndns.org:8443/hofuebersicht/api/v1/sheepDetail/';
let sheepdetailLink = 'http://hofuebersicht.kuenz.co.at:7443/hofuebersicht/api/v1/sheepDetail/';
let link = 'http://hofuebersicht.kuenz.co.at:7443/hofuebersicht/api/v1/';
let linkintern = 'http://10.1.0.237:7443/hofueberischt/api/v1/';

@Injectable()
export class SheepProvider {
data:any;
counter:any;
apiLink: string;
sheepNr: string;

  constructor(public http: Http) {
    console.log('Hello SheepProvider Provider');

    let networkLink = window.localStorage.getItem('network');
   if (networkLink == 'wifi') {
      this.apiLink = linkintern;
   } else {
      this.apiLink = link;
   }
  }

  

count() {
  if(this.data) {
    return Promise.resolve(this.data);
  }

  let headers = new Headers();
  headers.append('Authorization', window.localStorage.getItem('token'));

  return new Promise(resolve => {
    this.http.get(this.apiLink+'sheepcount', {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      resolve(this.data);
         }, (err) => {
          resolve(err);
        });
  });
};

sheepAblammTermin() {
  if(this.data) {
    return Promise.resolve(this.data);
  }

  let headers = new Headers();
  headers.append('Authorization', window.localStorage.getItem('token'));

  return new Promise(resolve => {
    this.http.get(this.apiLink+'sheepAblammTermine', {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      resolve(this.data);
      }, (err) => {
        resolve(err);
    });
  });
};

sheepVerkauf() {
  if(this.data) {
    return Promise.resolve(this.data);
  }

  let headers = new Headers();
  headers.append('Authorization', window.localStorage.getItem('token'));

  return new Promise(resolve => {
    this.http.get(this.apiLink+'sheepVerkauf', {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      resolve(this.data);
      }, (err) => {
        resolve(err);
    });
  });
};


sheepDetail(schaf_nr: string) {
  this.data = null;
  if(this.data) {
    return Promise.resolve(this.data);
  }

  let headers = new Headers();
  headers.append('Authorization', window.localStorage.getItem('token'));

  return new Promise(resolve => {
    this.http.get(sheepdetailLink+schaf_nr, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      this.data = data.results;
      console.log(this.data);
      resolve(this.data);
      }, (err) => {
        resolve(err);
    });
  });
};

}
