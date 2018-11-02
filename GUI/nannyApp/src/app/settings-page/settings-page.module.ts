import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { FormsModule } from '@angular/forms';
import { ChildDetailsContainerComponent } from './child-details-container/child-details-container.component';
import { ChildDetailsUpdateComponent } from './child-details-update/child-details-update.component';
import { NannyProfilePageModule } from '../nanny-profile-page/nanny-profile-page.module';
import { NannyDetailsComponent } from './nanny-details/nanny-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NannyProfilePageModule
  ],
  declarations: [
    SettingsPageComponent,
    AccountDetailsComponent,
    ChildDetailsComponent,
    ChildDetailsContainerComponent,
    ChildDetailsUpdateComponent,
    NannyDetailsComponent
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingsPageModule { }
