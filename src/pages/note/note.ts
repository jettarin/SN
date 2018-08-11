import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
item: any;
  data: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    console.log(navParams);

    this.item = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    console.log(this.item);

  }


}
