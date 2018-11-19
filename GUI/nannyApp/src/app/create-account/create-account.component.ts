import { Component, OnInit } from '@angular/core';
import { Account, LoginInfo, NannyInfo, ParentInfo, PersonalInfo } from '../models';
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

  constructor(
    private router: Router,
    private accountInfo: AccountInfo
  ) { }

  ngOnInit() {
    this.stepHideController = [false, true, true, true];
    this.loginInfo.type = 'nanny';
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
        }
      }
    } else {
      for (const attribute in this.parentInfo) {
        if (true) {
          this.account[attribute] = this.parentInfo[attribute];
        }
      }
    }
    if (this.account.type === 'parent') {
      this.accountInfo.addLogin({
        account_type: this.account.type, username:
          this.account.username, password: this.account.password
      }).subscribe(() => {
        this.accountInfo.addParent({
          username: this.account.username, password: this.account.password, first_name: this.account.firstName,
          last_name: this.account.lastName, age: this.account.age, gender: this.account.gender, address: this.account.address,
          city: this.account.city, state: this.account.state, zip: this.account.zip,
          email: this.account.email, phone_number: this.account.phone
        }).subscribe(() => {
          this.accountInfo.addChild({parent_username: this.account.username, name: this.account.children[0].name,
            age: this.account.children[0].age, gender: this.account.children[0].gender, likes: this.account.children[0].likes,
            allergies: this.account.children[0].allergies,
            medications: this.account.children[0].medications, special_requirements: this.account.children[0].specialReqs}).subscribe();
        });
      });
    }
    if (this.account.type === 'nanny') {
      this.accountInfo.addLogin({
        account_type: this.account.type, username:
          this.account.username, password: this.account.password
      }).subscribe(() => {
        this.accountInfo.addNanny({
          username: this.account.username, password: this.account.password, first_name: this.account.firstName,
          last_name: this.account.lastName, age: this.account.age, gender: this.account.gender, address: this.account.address,
          city: this.account.city, state: this.account.state, zip: this.account.zip,
          email: this.account.email, phone_number: this.account.phone
        }).subscribe(() => {
          this.accountInfo.addReference({nanny_username: this.account.username, name: this.account.references[0].name,
            phone_number: this.account.references[0].phone, email: this.account.references[0].email}).subscribe();
        });
      });
    }

    /*this.accountInfo.addAccount(this.account).subscribe(() => {
      this.router.navigateByUrl('/home');
    });*/
  }
}
