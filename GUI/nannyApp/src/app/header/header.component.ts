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

  userId: number;

  ngOnInit() {
    this.loginInfo.currentUserId.subscribe((id) => {
      this.userId = id;
    });
  }

}
