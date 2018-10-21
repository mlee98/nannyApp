import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import {UserPassComponent } from './user-pass/user-pass.component';
import { PersonalInfoComponent  } from './personal-info/personal-info.component';
import { Account } from './models/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account;
  firstname: String;
  lastname: String;

  constructor() { }

  ngOnInit() {
    this.account = {};
  }

}
