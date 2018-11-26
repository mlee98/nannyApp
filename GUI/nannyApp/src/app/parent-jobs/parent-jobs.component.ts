import { Job, Child } from '../models';
import { AccountInfo } from '../services/account-info.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../models/payment';
import { JobManager } from '../services/job-manager.service';
import { LoginInfo } from '../services/login-info.service';

@Component({
  selector: 'app-parent-jobs',
  templateUrl: './parent-jobs.component.html',
  styleUrls: ['./parent-jobs.component.css']
})
export class ParentJobsComponent implements OnInit {

  autoPay: Boolean; // = TEMP_ACCOUNT.payment.automatic;
  payment: Payment = {};
  dispJob: Job;
  noJobs: boolean;
  children: Child[]; // = TEMP_ACCOUNT.children;
  ongoing: boolean;
  username: string;
  tempRating: number;
  tempJob: Job = {};
  pending: Job[] = [];

  constructor(
    private jobManager: JobManager,
    private accountInfo: AccountInfo,
    private activatedRoute: ActivatedRoute,
    private loginInfo: LoginInfo
  ) { }

  jobs: Job[]; // = TEMP_ACCOUNT.parentJobs;
  current: Job[];
  completed: Job[];
  displayPayment: Boolean = false;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.username = params.username;
      this.jobManager.getJobsByUsername(this.username, 'parent').subscribe((result) => {
        this.jobs = result;
        this.current = this.jobs.filter(job => job.isComplete == false);
        this.completed = result.filter(job => job.isComplete == true);
        this.dispJob = result.length ? this.jobs[0] : null;
        this.accountInfo.getChildrenByUsername(params.username).subscribe((children) => {
          this.children = children;
          this.payment = {};
          if (this.dispJob !== null) {
            this.jobManager.getTasksByJobId(this.dispJob.job_id).subscribe((tasks) => {
              this.dispJob.tasks = tasks;
            });
          }
        });
      });
    });
  }

  clickJob(clickedJob) {
    this.jobManager.getTasksByJobId(clickedJob.job_id).subscribe((result) => {
      this.dispJob = clickedJob;
      if (this.dispJob.isAccepted === true) {
        this.ongoing = true;
      } else {
        this.ongoing = false;
      }
      this.dispJob.tasks = result;
    });
  }

  newJob(job: Job) {
    this.accountInfo.getAccountByUsername(this.username, 'parent').subscribe((tempAcc) => {
      job.familyName = this.username;
      job.address = tempAcc[0].address;
      job.city = tempAcc[0].city;
      job.state = tempAcc[0].state;
      job.zip = tempAcc[0].zip;
      job.parentPhone = tempAcc[0].phone;
      this.jobManager.addJob(job).subscribe((id) => {
        job.job_id = id;
        this.pending.push(job);
      });
    });
  }

  submitRatingAutoPay() {
    this.jobs.forEach(job => {
      if (job.nannyName === this.dispJob.nannyName) {
        job.rating = this.tempRating;
        job.isComplete = true;
      }
    });
    this.dispJob = {
      ...this.dispJob,
      isComplete: true,
      rating: this.tempRating,
    };
    this.tempRating = 0;

    this.completed.push(this.dispJob);
    this.current = this.jobs.filter(job => job.isComplete === false);
  }

  submitRating() {
    this.jobs.forEach(job => {
      if (job.nannyName === this.dispJob.nannyName) {
        job.rating = this.tempRating;
      }
    });
    this.dispJob = {
      ...this.dispJob,
      rating: this.tempRating,
    };
    this.tempRating = 0;
    if (!this.autoPay) {
      this.displayPayment = true;
    }
  }

  submitPayment() {
    this.jobs.forEach(job => {
      if (job.nannyName === this.dispJob.nannyName) {
        job.isComplete = true;
      }
    });

    this.dispJob = {
      ...this.dispJob,
      isComplete: true,
    };

    this.completed.push(this.dispJob);
    this.current = this.jobs.filter(job => job.isComplete === false);
    // this.displayPayment = false; // shows weird transition on close modal
    // just don't show multiple clicks of "Complete" and it's fine
  }

  complete() {
    this.jobManager.completeJob(this.dispJob.job_id).subscribe(() => {
      this.dispJob.isComplete = true;
      this.completed.push(this.dispJob);
      this.current = this.jobs.filter(job => job.isComplete == false);
    });
  }

}
