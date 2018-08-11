import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EkgPage } from './ekg';

@NgModule({
  declarations: [
    EkgPage,
  ],
  imports: [
    IonicPageModule.forChild(EkgPage),
  ],
})
export class EkgPageModule {}
