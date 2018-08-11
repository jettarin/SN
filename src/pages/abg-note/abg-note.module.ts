import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbgNotePage } from './abg-note';

@NgModule({
  declarations: [
    AbgNotePage,
  ],
  imports: [
    IonicPageModule.forChild(AbgNotePage),
  ],
})
export class AbgNotePageModule {}
