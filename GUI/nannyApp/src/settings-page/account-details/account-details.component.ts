import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  isEditMode: Boolean = false;

  @Input() account: Account;
  updateAccount: Account = {};

  ngOnInit() {
    this.updateAccount = { ...this.account };
  }

  clickInfo() {
    if (this.isEditMode) {
      this.account = { ...this.updateAccount };
    }
    this.isEditMode = !this.isEditMode;
  }

}
