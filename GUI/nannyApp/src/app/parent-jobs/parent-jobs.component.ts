import { Component, OnInit } from '@angular/core';
import { Job } from '../models';

@Component({
  selector: 'app-parent-jobs',
  templateUrl: './parent-jobs.component.html',
  styleUrls: ['./parent-jobs.component.css']
})
export class ParentJobsComponent implements OnInit {

  jobs: Job[];
  dispJob: Job;
  noJobs: boolean;
  nannyRating: number;

  constructor() { }

  ngOnInit() {
    this.jobs = [
      {id: 2, familyName: 'Smith', nannyName: 'Stokes', nannyPhone: '8179999999',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'Dec 14-16', address: '4444 Bob Road', city: 'Dallas', state: 'Texas', zip: 75206,
      tasks: [
        {name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge', location: 'fdsfsd', day: 'Mon', completed: true},
        {name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer', location: '1111 Soccer Field Place', day: 'Tues'}
      ],
      children: [
        {name: 'Johnny', age: 18, gender: 'male', allergies: 'gluten, milk', medications: 'ADHD', likes: 'Likes to play ball'},
        {name: 'Billy', age: 14, gender: 'male', allergies: 'gluten, milk', medications: 'none', specialReqs: 'Plays too much fortnite'}
      ]
    }
    ];
    this.dispJob = this.jobs[0];
    this.noJobs = false;
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

}
