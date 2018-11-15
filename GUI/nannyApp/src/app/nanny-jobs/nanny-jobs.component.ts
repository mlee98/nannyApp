import { Component, OnInit } from '@angular/core';
import { Job } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { JobInfo } from '../services/job-info.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nanny-jobs',
  templateUrl: './nanny-jobs.component.html',
  styleUrls: ['./nanny-jobs.component.css']
})
export class NannyJobsComponent implements OnInit {

  phoneNum: Number = 5123242233;
  dispJob: Job;
  placeholderJob: {
    id: 0, familyName: 'You currently have no jobs', nannyName: ''
  };

  constructor(
    private jobInfo: JobInfo,
    private activatedRoute: ActivatedRoute
  ) { }

  requests: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted === false);
  jobs: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && !job.isComplete);
  completed: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && job.isComplete);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.jobInfo.getNannyJobsById(params.id).subscribe((result) => {
        this.requests = result.filter(job => job.isAccepted === false);
        this.jobs = result.filter(job => job.isAccepted && !job.isComplete);
        this.completed = result.filter(job => job.isAccepted && job.isComplete);
        this.dispJob = this.jobs[0];
      });
    });
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
