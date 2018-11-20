import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentJobsComponent } from './parent-jobs.component';
import { JobsModule } from '../jobs/jobs.module';
import { FormsModule } from '@angular/forms';
import { CreateJobComponent } from './create-job/create-job.component';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    JobsModule,
    FormsModule,
    SharedModule,
    IconsModule,
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
