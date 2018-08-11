
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';




@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  data: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    console.log(navParams);

    this.item = navParams.get('item') || items.defaultItem;

  }

}
