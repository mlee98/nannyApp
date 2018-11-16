import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneIconComponent } from './phone-icon/phone-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { CalendarClockIconComponent } from './calendar-clock-icon/calendar-clock-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhoneIconComponent,
    HomeIconComponent,
    CalendarClockIconComponent,
  ],
  exports: [
    PhoneIconComponent,
    HomeIconComponent,
    CalendarClockIconComponent
  ]
})
export class IconsModule { }
