import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { ImageViewerController } from "ionic-img-viewer";
/**
 * Generated class for the AbgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abg',
  templateUrl: 'abg.html',
})
export class AbgPage {
  item: any;
  data: any;


  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public imageViewerCtrl: ImageViewerController) {
    console.log(navParams);

    this.item = navParams.get('item') || items.defaultItem;

  }



  view(imageToView) {
    console.log(imageToView);

    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbgPage');
  }

  gotoImage(v){
    console.log(v);
    this.navCtrl.push('AbgImagePage',{ name: v});
  }
  note(p){
    console.log("p",p);

    this.navCtrl.push('AbgNotePage',{types:p});
  }

}
