import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../../models';

@Component({
  selector: 'app-account-create-login',
  templateUrl: './account-create-login.component.html',
  styleUrls: ['./account-create-login.component.css']
})
export class AccountCreateLoginComponent implements OnInit {

  @Input()
  loginInfo: LoginInfo;

  @Input()
  stepHideController: boolean[];

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.stepHideController[0] = true;
    this.stepHideController[1] = false;
  }

}
