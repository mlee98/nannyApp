import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentJobsComponent } from './parent-jobs.component';
import { JobsModule } from '../jobs/jobs.module';
import { FormsModule } from '@angular/forms';
import { CreateJobComponent } from './create-job/create-job.component';

@NgModule({
  imports: [
    CommonModule,
    JobsModule,
    FormsModule
  ],
  declarations: [
    ParentJobsComponent,
    CreateJobComponent
  ],
  exports: [
    ParentJobsComponent
  ]
})
export class ParentJobsModule { }
