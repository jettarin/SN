import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/providers';
import { ImageViewerController } from "ionic-img-viewer";

/**
 * Generated class for the IcdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icd',
  templateUrl: 'icd.html',
})
export class IcdPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,items: Items, public imageViewerCtrl: ImageViewerController) {
    this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcdPage');
  }

  view(imageToView) {
    console.log(imageToView);

    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

}
