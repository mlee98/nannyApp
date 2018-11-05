import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NannyJobsComponent } from './nanny-jobs.component';
import { JobsModule } from '../jobs/jobs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JobsModule
  ],
  declarations: [
    NannyJobsComponent
  ],
  exports: [NannyJobsComponent]
})
export class NannyJobsModule { }
