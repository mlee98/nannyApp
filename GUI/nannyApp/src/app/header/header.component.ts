import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../services/login-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginInfo: LoginInfo
  ) { }

  username: string;
  loggedIn: boolean;
  type: string;

  ngOnInit() {
    this.loggedIn = false;
    this.loginInfo.currentUserId.subscribe((username) => {
      this.username = username;
      if (this.username !== '') {
        this.loggedIn = true;
      }
      this.loginInfo.currentUserType.subscribe((type) => {
        this.type = type;
      });
    });
  }

  logout() {
    this.loginInfo.changeId('');
    this.loggedIn = false;
  }

}
