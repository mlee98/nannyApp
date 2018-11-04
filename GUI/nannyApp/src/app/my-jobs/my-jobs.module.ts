import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyJobsComponent } from './my-jobs.component';
import { NannyScheduleComponent } from './nanny-schedule/nanny-schedule.component';
import { ChildCardComponent } from './child-card/child-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyJobsComponent,
    NannyScheduleComponent,
    ChildCardComponent
  ],
  exports: [MyJobsComponent]
})
export class MyJobsModule { }
