import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  account: Account;

  ngOnInit() {
    this.account = TEMP_ACCOUNT;
  }

}
