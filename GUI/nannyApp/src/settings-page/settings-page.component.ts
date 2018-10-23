import { Component, OnInit } from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  account: Account;

  ngOnInit() {
    this.account = {
      name: 'Bob Johnson',
      email: 'bobjohnson@gmail.com',
      phone: 5125436733,
      address: '32 Sunshine Ave, Dallas TX 75275',
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
      workWithAges: '8-14',
      skills: ['CPR certified', 'cooking', 'transportation'],
      bio: 'I love working with all ages, though I have the most experience working with ages 8-14.' +
          ' I can cook almost any meal, and I don\'t mind taking care of a couple of pets if needed!',
      references: [
        {
          name: 'Ryan Reynolds',
          phone: 5124687344,
          email: 'rreynolds@gmail.com',
        },
        {
          name: 'Hilary Duff',
          phone: 2146723541,
          email: 'hilaryduff@gmail.com',
        }
      ]
    };
  }

}
