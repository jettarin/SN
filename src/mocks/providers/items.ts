import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "การแปรผล ABG.",
        "profilePic": "assets/img/speakers/abs.jpg",
        "about": "Arterial Blood Gas.",
        "id":"abg",
        "page":"AbgPage"

      },
      {
        "name": "CPR PALS",
        "profilePic": "assets/img/speakers/cpr.jpg",
        "about": "Cardiopulmonary resuscitation.",
        "id":"cpr",
        "page":"CprPage"
      },
      {
        "name": "Oxygen",
        "profilePic": "assets/img/speakers/ox.jpg",
        "about": "ความเข้มข้นของ O2 ที่ได้จากการใช้ O2 therapyในอุปกรณ์ต่างๆ",
        "page":"OxygenPage",
        "note":"On ET-tube c Birdถ้าเป็น air mix คิดเป็น 40 -60 % On ET-tube c Ambu bag และ ขณะพ่นยา คิดเป็น 100%"
      },
      {
        "name": "EKG สำหรับพยาบาล",
        "profilePic": "assets/img/speakers/ekg.jpg",
        "about": "Electrocardiography.",
        "id":"ekg",
        "page":"EkgPage",
      },
      {
        "name": "ICD",
        "profilePic": "assets/img/speakers/chest.jpg",
        "about": "Intercostal drainge/ Chest tube insertion",
        "page":"IcdPage"
      },
      {
        "name": "สูตรผสมยาที่ใช้บ่อย",
        "profilePic": "assets/img/speakers/formula.jpg",
        "about": "Frequently Used Formulas",
        "page":"FormulaPage"
      },
      {
        "name": "อื่น ๆ",
        "profilePic": "assets/img/speakers/other.png",
        "about": "ข้อมูลด้านการหัตถการเพื่อพัฒนาทักษะ",
        "page":"OtherPage"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
