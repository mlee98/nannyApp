import { Component, OnInit } from '@angular/core';
import { Job } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';

@Component({
  selector: 'app-nanny-jobs',
  templateUrl: './nanny-jobs.component.html',
  styleUrls: ['./nanny-jobs.component.css']
})
export class NannyJobsComponent implements OnInit {

  dispJob: Job;
  placeholderJob: Job;

  constructor() { }

  requests: Job[] = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted === false);
  jobs: Job[] = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && !job.isComplete);
  completed: Job[] = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && job.isComplete);

  ngOnInit() {
    this.placeholderJob = {
      id: 0, familyName: 'You currently have no jobs', nannyName: ''
    };
    this.dispJob = this.jobs[0];
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

  clickRequest(clickedReq) {
    this.dispJob = clickedReq;
  }

  acceptRequest() {
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        break;
      }
    }
    this.dispJob.isAccepted = true;
    this.jobs.push(this.dispJob);
  }

  declineRequest() {
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        break;
      }
    }
    if (this.jobs.length) {
      this.dispJob = this.placeholderJob;
    } else {
      this.dispJob = this.jobs[0];
    }
  }

}
