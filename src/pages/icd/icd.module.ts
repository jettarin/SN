import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcdPage } from './icd';

@NgModule({
  declarations: [
    IcdPage,
  ],
  imports: [
    IonicPageModule.forChild(IcdPage),
  ],
})
export class IcdPageModule {}
