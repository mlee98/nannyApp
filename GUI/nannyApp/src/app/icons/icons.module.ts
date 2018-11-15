import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneIconComponent } from './phone-icon/phone-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneIconComponent,
    HomeIconComponent,
  ],
  exports: [
    PhoneIconComponent,
    HomeIconComponent
  ]
})
export class IconsModule { }
