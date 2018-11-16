import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { AccountInfo } from '../services/account-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private accountInfo: AccountInfo,
    private activatedRoute: ActivatedRoute,
  ) { }

  account: Account;

  ngOnInit() {
    /*this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.accountInfo.getAccountById(+params.id).subscribe((result) => {
          this.account = result;
        });
      } else {
        this.account = {};
      }
    });*/
    this.account = TEMP_ACCOUNT;
  }

}
