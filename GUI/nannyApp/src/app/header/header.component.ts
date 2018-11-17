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

  ngOnInit() {
    this.loginInfo.currentUserId.subscribe((username) => {
      this.username = username;
    });
  }

}
