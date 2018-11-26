import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';
import { AccountInfo } from '../services/account-info.service';
import { ActivatedRoute } from '@angular/router';
import { LoginInfo } from '../services/login-info.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private accountInfo: AccountInfo,
    private loginInfo: LoginInfo,
    private activatedRoute: ActivatedRoute,
  ) { }

  account: Account;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.username) {
        this.accountInfo.getAccountByUsername(params.username, this.loginInfo.getType()).subscribe((result) => {
          console.log(result);
          this.account = result[0];
          if (this.account.type === 'parent') {
            this.accountInfo.getChildrenByUsername(params.username).subscribe((childResult) => {
              this.account.children = childResult;
            });
          } else {
            this.accountInfo.getNannyInfo(params.username).subscribe((infoResult) => {
            });
          }
        });
      } else {
        this.account = {};
      }
    });
    // this.account = TEMP_ACCOUNT;
  }

}
