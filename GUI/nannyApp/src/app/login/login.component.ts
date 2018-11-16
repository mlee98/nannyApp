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
  }

  login() {
    /*this.loginInfo.login(this.userLogin).subscribe((result) => {
      if (result.id === -1) {
        return;
      } else {
        this.loginInfo.changeId(result.id);
        this.router.navigateByUrl('/home');
      }
    });*/
    this.loginInfo.changeId(1);
      this.router.navigateByUrl('/home');
  }

}
