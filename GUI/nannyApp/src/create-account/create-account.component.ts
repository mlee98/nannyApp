import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account;
  showUserPass: boolean;
  showPersonalInfo: boolean;

  constructor() { }

  ngOnInit() {
    this.account = {};
    this.showUserPass = true;
    this.showPersonalInfo = false;
  }

  userpass() {
    this.showUserPass = true;
    this.showPersonalInfo = false;
  }

  personalinfo() {
    this.showUserPass = false;
    this.showPersonalInfo = true;
  }

}
