import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  nombre = "";
  telefono = "";
  correo_electronico = "";
  facebook = "";
  twitter = "";
  instagram = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  addContact() {
    console.log('addContact');

    const contact = {
      nombre: this.nombre,
      telefono: this.telefono,
      correo_electronico: this.correo_electronico,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram
    };
    console.log(JSON.stringify(contact));

    this.http.post('/', contact)
      .subscribe(data => {
        console.log(JSON.stringify(data));
        this.navCtrl.pop();
      }, error => {
        console.log(JSON.stringify(error));
        this.navCtrl.pop();
      });
  }

}
