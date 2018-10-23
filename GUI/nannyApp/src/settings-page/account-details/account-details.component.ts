import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  @Input() account: Account;

  ngOnInit() {
  }

}
