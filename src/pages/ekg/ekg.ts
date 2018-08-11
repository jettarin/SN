import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Items } from '../../providers/providers';

import { ImageViewerController } from "ionic-img-viewer";
/**
 * Generated class for the EkgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ekg',
  templateUrl: 'ekg.html',
})
export class EkgPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,items: Items, public imageViewerCtrl: ImageViewerController) {
    this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EkgPage');
  }


  view(imageToView) {
    console.log(imageToView);

    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

}
