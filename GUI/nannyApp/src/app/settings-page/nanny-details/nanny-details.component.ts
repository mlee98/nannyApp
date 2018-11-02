import { Component, OnInit, Input } from '@angular/core';
import { Account, NannyReference } from '../../models';

@Component({
  selector: 'app-nanny-details',
  templateUrl: './nanny-details.component.html',
  styleUrls: ['./nanny-details.component.css']
})
export class NannyDetailsComponent implements OnInit {

  constructor() { }

  @Input() account: Account;
  updateAccount: Account;
  isEditMode: Boolean = false;

  ngOnInit() {
    this.updateAccount = { ...this.account };
  }

  onClickInfo() {
    if (this.isEditMode) {
      this.account = { ...this.updateAccount };
    }
    this.isEditMode = !this.isEditMode;
  }

  addReference() {
    this.updateAccount.references.push(new NannyReference);
  }

  removeReference(index) {
    this.updateAccount.references.splice(index, 1);
  }

}
