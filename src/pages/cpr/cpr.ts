import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { ImageViewerController } from "ionic-img-viewer";

/**
 * Generated class for the CprPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cpr',
  templateUrl: 'cpr.html',
})
export class CprPage {
  item: any;

  constructor(public navCtrl: NavController,public   items : Items , public navParams: NavParams, public imageViewerCtrl: ImageViewerController) {
    this.item = navParams.get('item') || items.defaultItem;

  }

  view(imageToView) {
    console.log(imageToView);

    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CprPage');

  }




}
