import { Job, Child } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { JobInfo } from '../services/job-info.service';
import { AccountInfo } from '../services/account-info.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-parent-jobs',
  templateUrl: './parent-jobs.component.html',
  styleUrls: ['./parent-jobs.component.css']
})
export class ParentJobsComponent implements OnInit {

  autoPay: Boolean = TEMP_ACCOUNT.payment.automatic;
  payment: Payment = {};
  dispJob: Job;
  noJobs: boolean;
  children: Child[] = TEMP_ACCOUNT.children;
  ongoing: boolean;
  userId: number;
  tempRating: number;
  tempJob: Job = {};
  pending: Job[] = [];

  constructor(
    private jobInfo: JobInfo,
    private accountInfo: AccountInfo,
    private activatedRoute: ActivatedRoute
  ) { }

  jobs: Job[] = TEMP_ACCOUNT.parentJobs;
  current: Job[];
  completed: Job[];
  displayPayment: Boolean = false;

  ngOnInit() {
    this.dispJob = this.jobs.length ? this.jobs[0] : null;
    this.current = this.jobs.filter(job => job.isComplete === false);
    this.completed = this.jobs.filter(job => job.isComplete === true);

    this.activatedRoute.params.subscribe((params) => {
      /*this.jobInfo.getParentJobsById(params.id).subscribe((result) => {
        this.jobs = result;
        this.current = result.filter(job => job.isComplete === false);
        this.completed = result.filter(job => job.isComplete === true);
        this.dispJob = result.length ? this.jobs[0] : null;

        this.accountInfo.getChildrenById(params.id).subscribe((children) => {
          this.children = children;
          this.accountInfo.getAutomaticPaybyId(params.id).subscribe((payment) => {
            if (payment.automatic === true) {
              this.payment = payment;
            } else {
              this.payment = {};
            }
          });
        });
      });*/
      this.userId = params.id;
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
    // this.accountInfo.getAccountById(this.userId).subscribe((result) => {
     job.id = this.userId;
     job.familyName = TEMP_ACCOUNT.lastName;
     job.address = TEMP_ACCOUNT.address;
     job.city = TEMP_ACCOUNT.city;
     job.state = TEMP_ACCOUNT.state;
     job.zip = TEMP_ACCOUNT.zip;
     job.parentPhone = TEMP_ACCOUNT.phone;
     job.isAccepted = false;
     job.isComplete = false;
     this.pending.push(job);
    // });
    /*this.jobInfo.addJob(job).subscribe(() => {
      this.pending.push(job);
    });*/
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

}
