import { Component, OnInit } from '@angular/core';
import { Account } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';

@Component({
  selector: 'app-nanny-profile-page',
  templateUrl: './nanny-profile-page.component.html',
  styleUrls: ['./nanny-profile-page.component.css']
})
export class NannyProfilePageComponent implements OnInit {

  constructor() { }

  account: Account;

  ngOnInit() {
    this.account = TEMP_ACCOUNT;
  }

}
