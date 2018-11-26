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
    pet_friendly: false,
    can_drive: false,
    can_cook: false,
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
      this.account.can_cook = this.nannyInfo.canCook ? 1 : 0;
      this.account.can_drive = this.nannyInfo.canDrive ? 1 : 0;
      this.account.pet_friendly = this.nannyInfo.petFriendly ? 1 : 0;
      this.account.cpr = this.nannyInfo.cpr ? 1 : 0;
      this.account.yearsExp = this.nannyInfo.yearsExp;
      this.account.references = this.nannyInfo.references;
      this.account.minAge = this.nannyInfo.minAge;
      this.account.maxAge = this.nannyInfo.maxAge;
      this.account.bio = this.nannyInfo.bio;
      this.account.minWage = this.nannyInfo.minWage;
      if (!this.nannyInfo.canCook) {
        this.account.can_cook = 0;
      }
      if (!this.nannyInfo.canDrive) {
        this.account.can_drive = 0;
      }
      if (!this.nannyInfo.petFriendly) {
        this.account.pet_friendly = 0;
      }
      if (!this.nannyInfo.cpr) {
        this.account.cpr = 0;
      }
    } else {
      for (const attribute in this.parentInfo) {
        if (true) {
          this.account[attribute] = this.parentInfo[attribute];
        }
      }
    }
    console.log(JSON.stringify(this.account));
    this.accountInfo.addAccount(this.account).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
