import { Component, OnInit } from '@angular/core';
import { Job, Child } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { JobInfo } from '../services/job-info.service';
import { AccountInfo } from '../services/account-info.service';
import { ActivatedRoute } from '@angular/router';

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
  ongoing: boolean;
  userId: number;

  constructor(
    private jobInfo: JobInfo,
    private accountInfo: AccountInfo,
    private activatedRoute: ActivatedRoute
  ) { }

  jobs: Job[]; // = TEMP_ACCOUNT.parentJobs;
  pending: Job[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;
      this.jobInfo.getParentJobsById(params.id).subscribe((result) => {
        this.pending = result.filter(job => job.isAccepted === false);
        this.jobs = result.filter(job => job.isAccepted && !job.isComplete);
        this.dispJob = this.jobs[0];
        if (this.dispJob.isAccepted === true) {
          this.ongoing = true;
        } else {
          this.ongoing = false;
        }
        this.noJobs = false;
        this.accountInfo.getChildrenById(params.id).subscribe((children) => {
          this.children = children;
        });
      });
    });
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
    if (this.dispJob.isAccepted === true) {
      this.ongoing = true;
    } else {
      this.ongoing = false;
    }
  }

  newJob(job) {
    this.accountInfo.getAccountById(this.userId).subscribe((result) => {
     job.id = this.userId;
     job.familyName = result.lastName;
     job.address = result.address;
     job.city = result.city;
     job.state = result.state;
     job.zip = result.zip;
     job.parentPhone = result.phone;
     job.isAccepted = false;
     job.isComplete = false;
     this.pending.push(job);
     console.log(job);
    });
    /*this.jobInfo.addJob(job).subscribe(() => {
      this.pending.push(job);
    });*/
  }

  completeJob() {

  }

}
