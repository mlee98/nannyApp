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

  ngOnInit() {
    this.loginInfo.currentUserId.subscribe((value) => {

    });
  }

  login() {
    /*this.loginInfo.test().subscribe((result) => {
      console.log(result);
      if (result.username !== '') {
        return;
      } else {
        this.loginInfo.changeId(result.username);
        this.router.navigateByUrl('/home');
      }
    });*/
    this.loginInfo.changeId('random_parent123');
    this.router.navigateByUrl('parent-jobs/random_parent123');
  }

}
