import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
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
  tempRating: number;
  tempJob: Job = {};

  constructor() { }

  jobs: Job[] = TEMP_ACCOUNT.parentJobs;
  current: Job[];
  completed: Job[];
  displayPayment: Boolean = false;

  ngOnInit() {
    this.dispJob = this.jobs.length ? this.jobs[0] : null;
    this.current = this.jobs.filter(job => job.isComplete === false);
    this.completed = this.jobs.filter(job => job.isComplete === true);
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
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
