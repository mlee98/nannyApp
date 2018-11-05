import { Component, OnInit } from '@angular/core';
import { Account } from './models/account';
import { Router } from '@angular/router';
import { TEMP_ACCOUNT } from './temp-account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nannyApp';
  constructor (private router: Router) {
    this.router.events.subscribe(e => this.checkShowHeader(e));
  }

  account: Account;
  showHeader: Boolean = true;

  ngOnInit() {
    this.account = TEMP_ACCOUNT;
  }

  checkShowHeader(event) {
    if (event.url === '/login' || event.url === '/create-account'
        || event.url === '/404' || event.urlAfterRedirects === '/404') {
      this.showHeader = false;
    } else if (event.url) {
      this.showHeader = true;
    }
  }
}
