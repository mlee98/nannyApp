import { Component, OnInit } from '@angular/core';
import { Account, LoginInfo, NannyInfo, ParentInfo, PersonalInfo, NannyDetails } from '../models';
import { Router } from '@angular/router';
import { AccountInfo } from '../services/account-info.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {};
  stepHideController: boolean[];
  loginInfo: LoginInfo = {};
  personalInfo: PersonalInfo = {};
  nannyInfo: NannyInfo = { references: [] };
  parentInfo: ParentInfo = { children: [] };
  nannyDeets: NannyDetails = { yearsExp: 0,
    minAge: 0,
    maxAge: 0,
    minWage: 0,
    maxWage: 0,
    cpr: false,
    petFriendly: false,
    canDrive: false,
    canCook: false,
    bio: '',
    rating: 0};

  constructor(
    private router: Router,
    private accountInfo: AccountInfo
  ) { }

  ngOnInit() {
    this.stepHideController = [false, true, true, true];
    this.loginInfo.type = '';
    this.account.references = [];
    this.account.children = [];
  }

  generateAccount() {
    for (const attribute in this.loginInfo) {
      if (true) {
        this.account[attribute] = this.loginInfo[attribute];
      }
    }
    for (const attribute in this.personalInfo) {
      if (true) {
        this.account[attribute] = this.personalInfo[attribute];
      }
    }
    if (this.account.type === 'nanny') {
      for (const attribute in this.nannyInfo) {
        if (true) {
          this.account[attribute] = this.nannyInfo[attribute];
          this.account.canCook = this.nannyInfo.canCook;
          this.account.canDrive = this.nannyInfo.canDrive;
          this.account.petFriendly = this.nannyInfo.petFriendly;
          this.account.cpr = this.nannyInfo.cpr;
        }
      }
    } else {
      for (const attribute in this.parentInfo) {
        if (true) {
          this.account[attribute] = this.parentInfo[attribute];
        }
      }
    }
    console.log(this.account);
    this.accountInfo.addAccount(this.account).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
