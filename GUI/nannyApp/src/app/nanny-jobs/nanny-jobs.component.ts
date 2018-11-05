import { Component, OnInit } from '@angular/core';
import { Job } from '../models';

@Component({
  selector: 'app-nanny-jobs',
  templateUrl: './nanny-jobs.component.html',
  styleUrls: ['./nanny-jobs.component.css']
})
export class NannyJobsComponent implements OnInit {

  jobs: Job[];
  requests: Job[];
  dispJob: Job;
  isJob: boolean;
  noReqs: boolean;
  noJobs: boolean;
  placeholderJob: Job;


  constructor() { }

  ngOnInit() {
    this.isJob = true;
    this.placeholderJob = {
      id: 0, familyName: 'You currently have no jobs', nannyName: ''
    };
    this.requests = [
      {id: 1, familyName: 'Lee', nannyName: 'Stokes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'Dec 12-14', address: '4444 Bob Road', city: 'Dallas', state: 'Texas', zip: 75206,
      tasks: [
        {name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge', location: 'fdsfsd', day: 'Mon'},
        {name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer', location: '1111 Soccer Field Place', day: 'Tues'}
      ],
      children: [
        {name: 'Johnny', age: 18, gender: 'male', allergies: 'gluten, milk', medications: 'ADHD', likes: 'Likes to play ball'},
        {name: 'Billy', age: 14, gender: 'male', allergies: 'gluten, milk', medications: 'none', specialReqs: 'Plays too much fortnite'}
      ]
    }
    ];
    this.jobs = [
      {id: 2, familyName: 'Smith', nannyName: 'Stokes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'M-T-W 12:00-8:00', address: '4444 Bob Road', city: 'Dallas', state: 'Texas', zip: 75206,
      tasks: [
        {name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge', location: 'fdsfsd', day: 'Mon'},
        {name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer', location: '1111 Soccer Field Place', day: 'Tues'}
      ],
      children: [
        {name: 'Johnny', age: 18, gender: 'male', allergies: 'gluten, milk', medications: 'ADHD', likes: 'Likes to play ball'},
        {name: 'Billy', age: 14, gender: 'male', allergies: 'gluten, milk', medications: 'none', specialReqs: 'Plays too much fortnite'}
      ]
    },
      {id: 3, familyName: 'Jones', nannyName: 'Dillard'},
      {id: 4, familyName: 'Brodsffs', nannyName: 'Cage'},
      {id: 5, familyName: 'Obama', nannyName: 'Knight'}
    ];
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
