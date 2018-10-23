import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ChildDetailsComponent } from './child-details/child-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SettingsPageComponent,
    AccountDetailsComponent,
    ChildDetailsComponent
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingsPageModule { }
