import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NannyProfilePageComponent } from './nanny-profile-page.component';
import { NannyContactCardComponent } from './nanny-contact-card/nanny-contact-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NannyProfilePageComponent,
    NannyContactCardComponent
  ],
  exports: [
    NannyProfilePageComponent
  ]
})
export class NannyProfilePageModule { }
