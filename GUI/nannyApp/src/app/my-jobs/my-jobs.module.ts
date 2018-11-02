import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyJobsComponent } from './my-jobs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MyJobsComponent],
  exports: [MyJobsComponent]
})
export class MyJobsModule { }
