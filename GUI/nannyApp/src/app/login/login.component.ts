import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../services/login-info.service';
import { Login } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginInfo: LoginInfo,
    private router: Router
  ) { }

  userLogin: Login = {};
  validLogin: boolean;

  ngOnInit() {
    this.validLogin = true;
    this.loginInfo.currentUserId.subscribe((value) => {
    });
  }

  login() {
    this.loginInfo.login(this.userLogin).subscribe((result) => {
      if (result === null) {
        this.validLogin = false;
      } else {
        this.loginInfo.changeId(this.userLogin.username);
        this.loginInfo.changeType(result);
        this.router.navigateByUrl(`${result}-jobs/${this.userLogin.username}`);
      }
    });
    // this.loginInfo.changeId('random_parent123');
    // this.router.navigateByUrl('parent-jobs/random_parent123');
  }

}
