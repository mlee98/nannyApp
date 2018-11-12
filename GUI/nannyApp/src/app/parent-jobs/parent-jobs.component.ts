import { Component, OnInit } from '@angular/core';
import { Job, Child } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { JobInfo } from '../services/job-info.service';
import { AccountInfo } from '../services/account-info.service';

@Component({
  selector: 'app-parent-jobs',
  templateUrl: './parent-jobs.component.html',
  styleUrls: ['./parent-jobs.component.css']
})
export class ParentJobsComponent implements OnInit {

  dispJob: Job;
  noJobs: boolean;
  nannyRating: number;
  children: Child[];
  tempJob: {};

  constructor(
    private jobInfo: JobInfo,
    private accountInfo: AccountInfo
  ) { }

  jobs: Job[]; // = TEMP_ACCOUNT.parentJobs;
  pending: Job[];

  ngOnInit() {
    this.jobInfo.getParentJobsById(1).subscribe((result) => {
      this.pending = result.filter(job => job.isAccepted === false);
      this.jobs = result.filter(job => job.isAccepted && !job.isComplete);
      this.dispJob = this.jobs[0];
      this.noJobs = false;
      this.accountInfo.getChildrenById(1).subscribe((children) => {
        this.children = children;
      });
    });
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

  newJob(job) {
    console.log(job);
    /*this.jobInfo.addJob(job).subscribe(() => {
      this.pending.push(job);
    });*/
    this.pending.push(job);
  }

}
