import { Component, OnInit } from '@angular/core';
import { SearchField, Account, Job, NannyInfo } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginInfo } from '../services/login-info.service';
import { NannySearch } from '../services/nanny-search.service';
import { JobManager } from '../services/job-manager.service';
import { AccountInfo } from '../services/account-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchField: SearchField;
  childAgeRange: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  nannyAges: { min: number, max: number }[] = [{ min: 18, max: 25 }, { min: 26, max: 35 },
  { min: 36, max: 45 }, { min: 46, max: 50 }, { min: 50, max: 100 }];
  nannyAge: number;
  gender: number;
  nannys: NannyInfo[] = [];
  jobs: Job[];
  selectedNanny: number;
  selectedJob: number;
  searcherUsername: string;

  constructor(
    private loginInfo: LoginInfo,
    private router: Router,
    private nannySearch: NannySearch,
    private jobManager: JobManager,
    private accountInfo: AccountInfo,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedNanny = 0;
    this.nannyAge = 0;
    this.gender = 0;
    this.jobs = [];
    this.searcherUsername = this.loginInfo.getusername();
    this.jobManager.getJobsByUsername(this.searcherUsername, 'parent').subscribe((jobs) => {
      jobs.forEach(job => {
        if (job.isAccepted == false && job.isComplete == false) {
          this.jobs.push(job);
        }
      });
    });
    this.searchField = {
      gender: 'gender',
      minNannyAge: 0,
      maxNannyAge: 4,
      minChildAge: 0,
      maxChildAge: 17,
      experience: 0
    };
  }

  search() {
    this.searchField.minNannyAge = this.nannyAges[this.nannyAge - 1].min;
    this.searchField.maxNannyAge = this.nannyAges[this.nannyAge - 1].max;
    if (this.searchField.zip === null) {
      this.searchField.zip = 0;
    }
    this.nannySearch.search(this.searchField).subscribe((nannys) => {
      this.nannys = nannys;
    });
  }

  sendRequest() {
    this.jobManager.submitRequest(this.selectedJob[0], this.nannys[this.selectedNanny].username).subscribe();
  }

}
