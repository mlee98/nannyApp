import { Component, OnInit } from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nannyApp';

  account: Account;

  ngOnInit() {
    this.account = {
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bobjohnson@gmail.com',
      phone: '5125436733',
      address: '32 Sunshine Ave',
      city: 'Dallas',
      state: 'TX',
      zip: 75275,
      gender: 'Male',
      age: 27,
      type: 'nanny',

      // PARENT account info
      children: [
        {
          name: 'Jenny',
          gender: 'Female',
          age: 4,
          likes: 'Hello Kitty, Teletubbies, Bananas, Pocahontas',
          allergies: 'Peanut butter',
          medications: 'Benadryl',
          specialReqs: 'No TV 2 hours before bedtime',
        },
        {
          name: 'Max',
          gender: 'Male',
          age: 3,
          likes: 'Teletubbies, Bionicles, Rabbits',
          allergies: 'None',
          medications: 'None',
          specialReqs: 'No TV 2 hours before bedtime',
        }
      ],

      // NANNY account info
      yearsExp: 3,
      minAge: 8,
      maxAge: 14,
      minWage: 15,
      maxWage: 20,
      cpr: true,
      canDrive: false,
      canCook: true,
      petFriendly: true,

      bio: 'I love working with all ages, though I have the most experience working with ages 8-14.' +
          ' I can cook almost any meal, and I don\'t mind taking care of a couple of pets if needed!' +
          ' Along with my years of experience working as a nanny, I\'ve spent the last 2 years' +
          ' working part-time at a daycare.',
      references: [
        {
          name: 'Ryan Reynolds',
          phone: '5124687344',
          email: 'rreynolds@gmail.com',
        },
        {
          name: 'Hilary Duff',
          phone: '2146723541',
          email: 'hilaryduff@gmail.com',
        }
      ]
    };

  }
}
