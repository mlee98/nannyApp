import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { FormsModule } from '@angular/forms';
import { ChildDetailsContainerComponent } from './child-details-container/child-details-container.component';
import { ChildDetailsUpdateComponent } from './child-details-update/child-details-update.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SettingsPageComponent,
    AccountDetailsComponent,
    ChildDetailsComponent,
    ChildDetailsContainerComponent,
    ChildDetailsUpdateComponent,
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingsPageModule { }
