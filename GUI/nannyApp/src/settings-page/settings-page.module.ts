import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SettingsPageComponent
  ],
  exports: [
    SettingsPageComponent
  ]
})
export class SettingsPageModule { }
