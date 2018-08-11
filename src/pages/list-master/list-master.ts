import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];


  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    console.log(this.currentItems);

  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    console.log("this item = ",item);
    if (item.page == 'OtherPage') {
      window.open("https://drive.google.com/file/d/1L1GQR7BRMt7yx6uhXKEvcX62vgiCgU_R/view",'_system', 'location=yes');
    }else{
      this.navCtrl.push(item.page, {
        item: item
      });
    }
    }




  }






