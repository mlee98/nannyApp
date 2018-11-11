import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { AccountInfo } from '../services/account-info.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private accountInfo: AccountInfo
  ) { }

  account: Account;

  ngOnInit() {
    this.accountInfo.getAccountById(1).subscribe((result) => {
      this.account = result;
    });
    // this.account = TEMP_ACCOUNT;
  }

}
