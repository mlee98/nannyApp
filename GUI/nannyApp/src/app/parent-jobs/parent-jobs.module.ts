import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentJobsComponent } from './parent-jobs.component';
import { JobsModule } from '../jobs/jobs.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JobsModule,
    FormsModule
  ],
  declarations: [ParentJobsComponent],
  exports: [
    ParentJobsComponent
  ]
})
export class ParentJobsModule { }
