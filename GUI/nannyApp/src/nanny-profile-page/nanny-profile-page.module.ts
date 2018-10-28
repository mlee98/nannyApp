import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NannyProfilePageComponent } from './nanny-profile-page.component';
import { NannyContactCardComponent } from './nanny-contact-card/nanny-contact-card.component';
import { NannyProfileComponent } from './nanny-profile/nanny-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NannyProfilePageComponent,
    NannyContactCardComponent,
    NannyProfileComponent
  ],
  exports: [
    NannyProfilePageComponent,
    NannyProfileComponent
  ]
})
export class NannyProfilePageModule { }
