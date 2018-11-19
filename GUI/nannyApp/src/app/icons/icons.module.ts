import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneIconComponent } from './phone-icon/phone-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { CalendarClockIconComponent } from './calendar-clock-icon/calendar-clock-icon.component';
import { StrollerIconComponent } from './stroller-icon/stroller-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneIconComponent,
    HomeIconComponent,
    CalendarClockIconComponent,
    StrollerIconComponent,
  ],
  exports: [
    PhoneIconComponent,
    HomeIconComponent,
    CalendarClockIconComponent,
    StrollerIconComponent
  ]
})
export class IconsModule { }
