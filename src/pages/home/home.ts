import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos: any;
  paginaContacto = ContactPage;
  constructor(public navCtrl: NavController, public http: HttpClient ) {
    
  }

  ionViewWillEnter()
  {
    this.http.get('/Contactos/Contactos')
    .subscribe(data => {
       this.contactos = data;
       console.log(JSON.stringify(data));
     }, error => {
       console.log(JSON.stringify(error));
     });
    
  }

  clickAdd(){
    console.log('clickAdd');
    this.navCtrl.push(this.paginaContacto);
  }

}
