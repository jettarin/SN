import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OxygenPage } from './oxygen';

@NgModule({
  declarations: [
    OxygenPage,
  ],
  imports: [
    IonicPageModule.forChild(OxygenPage),
  ],
})
export class OxygenPageModule {}
