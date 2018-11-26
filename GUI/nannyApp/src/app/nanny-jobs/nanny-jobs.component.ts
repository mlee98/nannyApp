import { Component, OnInit } from '@angular/core';
import { Job, Task} from '../models';
import { ActivatedRoute } from '@angular/router';
import { JobManager } from '../services/job-manager.service';
import { AccountInfo } from '../services/account-info.service';
import { LoginInfo } from '../services/login-info.service';


@Component({
  selector: 'app-nanny-jobs',
  templateUrl: './nanny-jobs.component.html',
  styleUrls: ['./nanny-jobs.component.css']
})
export class NannyJobsComponent implements OnInit {

  dispJob: Job;
  placeholderJob: {
    id: 0, familyName: 'You currently have no jobs', nannyName: ''
  };
  username: string;

  constructor(
    private jobManager: JobManager,
    private activatedRoute: ActivatedRoute,
    private accountInfo: AccountInfo,
    private loginInfo: LoginInfo
  ) { }

  requests: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted === false);
  jobs: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && !job.isComplete);
  completed: Job[]; // = TEMP_ACCOUNT.nannyJobs.filter(job => job.isAccepted && job.isComplete);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.username = this.loginInfo.getusername();
      this.jobManager.getJobsByUsername(params.username, 'nanny').subscribe((result) => {
        this.requests = result.filter(job => job.isAccepted == false);
        this.jobs = result.filter(job => (job.isAccepted == true) && (job.isComplete == false));
        this.completed = result.filter(job => (job.isAccepted == true) && (job.isComplete == true));
        if (this.jobs.length != 0) {
          this.dispJob = this.jobs[0];
        } else {
          if (this.requests.length != 0) {
            this.dispJob = this.requests[0];
          } else {
            this.dispJob = this.placeholderJob;
          }
        }
        this.jobManager.getTasksByJobId(this.dispJob.job_id).subscribe((tasks) => {
          this.dispJob.tasks = tasks;
        });
      });
    });
    // this.dispJob = this.jobs[0];
  }

  clickJob(clickedJob) {
    this.jobManager.getTasksByJobId(clickedJob.job_id).subscribe((tasks) => {
      this.dispJob = clickedJob;
      this.dispJob.tasks = tasks;
    });
  }

  clickRequest(clickedReq) {
    this.jobManager.getTasksByJobId(clickedReq.job_id).subscribe((tasks) => {
      this.dispJob = clickedReq;
      this.dispJob.tasks = tasks;
    });
  }

  acceptRequest() {
    /*for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        break;
      }
    }
    this.dispJob.isAccepted = true;
    this.jobs.push(this.dispJob);*/
    this.accountInfo.getAccountByUsername(this.username, 'nanny').subscribe((result) => {
      this.jobManager.acceptJob(this.dispJob.job_id, result.phone).subscribe((id) => {
        for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i].job_id === this.dispJob.job_id) {
          this.requests.splice(i, 1);
          break;
          }
        }
        this.dispJob.isAccepted = true;
        this.dispJob.job_id = id;
        this.jobs.push(this.dispJob);
      });
    });
  }

  declineRequest() {
    this.jobManager.declineJob(this.dispJob.job_id).subscribe(() => {
      for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i].job_id === this.dispJob.job_id) {
          this.requests.splice(i, 1);
          break;
        }
      }
      if (this.jobs.length === 0) {
        this.dispJob = this.placeholderJob;
      } else {
        this.dispJob = this.jobs[0];
      }
    });
    /*for (let i = 0; i < this.requests.length; i++) {
      if (this.requests[i].id === this.dispJob.id) {
        this.requests.splice(i, 1);
        break;
      }
    }
    if (this.jobs.length === 0) {
      this.dispJob = this.placeholderJob;
    } else {
      this.dispJob = this.jobs[0];
    }*/
  }

  updateTasks(task) {
    this.jobManager.updateTasks(this.dispJob.job_id, task).subscribe();
  }

}
