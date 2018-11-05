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
  isJob: boolean;
  noReqs: boolean;
  noJobs: boolean;
  placeholderJob: Job;


  constructor() { }

  requests: Job[] = TEMP_ACCOUNT.requests;
  jobs: Job[] = TEMP_ACCOUNT.jobs;

  ngOnInit() {
    this.isJob = true;
    this.placeholderJob = {
      id: 0, familyName: 'You currently have no jobs', nannyName: ''
    };
    this.dispJob = this.jobs[0];
    if (this.requests.length === 0) {
      this.noReqs = true;
    } else {
      this.noReqs = false;
    }
    if (this.jobs.length === 0) {
      this.noJobs = true;
    } else {
      this.noJobs = false;
    }
  }

  clickJob(clickedJob) {
    this.isJob = true;
    this.dispJob = clickedJob;
  }

  clickRequest(clickedReq) {
    this.isJob = false;
    this.dispJob = clickedReq;
  }

  acceptRequest() {
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        if (this.requests.length === 0) {
          this.noReqs = true;
        }
        break;
      }
    }
    this.jobs.push(this.dispJob);
    this.isJob = true;
  }

  declineRequest() {
    for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        if (this.requests.length === 0) {
          this.noReqs = true;
        }
        break;
      }
    }
    if (this.noJobs === true) {
      this.dispJob = this.placeholderJob;
    } else {
      this.isJob = true;
      this.dispJob = this.jobs[0];
    }
  }

}
