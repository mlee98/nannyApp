import { Component, OnInit} from '@angular/core';
import { Account, LoginInfo, NannyInfo, ParentInfo, PersonalInfo } from '../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {};
  stepHideController: boolean[];
  loginInfo: LoginInfo = {};
  personalInfo: PersonalInfo = {paymentMethod: {}};
  nannyInfo: NannyInfo = {references: []};
  parentInfo: ParentInfo = {children: []};

  constructor(private router: Router) { }

  ngOnInit() {
    this.stepHideController = [false, true, true, true];
    this.loginInfo.type = 'nanny';
    this.account.references = [];
    this.account.children = [];
    this.account.paymentMethod = {};
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
        }
      }
    } else {
      for (const attribute in this.parentInfo) {
        if (true) {
          this.account[attribute] = this.parentInfo[attribute];
        }
      }
    }

    this.router.navigateByUrl('/');
  }
}
