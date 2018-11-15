import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NannyJobsComponent } from './nanny-jobs.component';
import { JobsModule } from '../jobs/jobs.module';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JobsModule,
    SharedModule,
    IconsModule
  ],
  declarations: [
    NannyJobsComponent
  ],
  exports: [NannyJobsComponent]
})
export class NannyJobsModule { }
