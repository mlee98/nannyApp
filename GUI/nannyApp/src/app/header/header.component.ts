import { Component, OnInit, Input } from '@angular/core';
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

  @Input() accountType: string;

  username: string;
  loggedIn: boolean;

  ngOnInit() {
    this.loggedIn = false;
    this.loginInfo.currentUserId.subscribe((username) => {
      this.username = username;
      if (this.username !== '') {
        this.loggedIn = true;
      }
    });
  }

  logout() {
    this.loginInfo.changeId('');
    this.loggedIn = false;
  }

}
