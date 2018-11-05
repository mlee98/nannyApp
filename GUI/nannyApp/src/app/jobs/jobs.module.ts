import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCardComponent } from './child-card/child-card.component';
import { JobScheduleComponent } from './job-schedule/job-schedule.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChildCardComponent,
    JobScheduleComponent,
    RatingComponent
  ],
  exports: [
    JobScheduleComponent,
    ChildCardComponent,
    RatingComponent
  ]
})
export class JobsModule { }
