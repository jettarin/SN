import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AbgNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abg-note',
  templateUrl: 'abg-note.html',
})
export class AbgNotePage {
  type:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);

    this.type = navParams.data.types;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbgNotePage');
  }

}
