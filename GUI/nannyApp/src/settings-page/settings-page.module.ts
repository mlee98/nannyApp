import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SettingsPageComponent,
    AccountDetailsComponent
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingsPageModule { }
