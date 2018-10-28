import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account';
import { NannyReference } from '../../models/nanny-reference';

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

  addSkill() {
    this.updateAccount.skills.push('');
  }

  removeSkill(index) {
    this.updateAccount.skills.splice(index, 1);
  }

  addReference() {
    this.updateAccount.references.push(new NannyReference);
  }

  removeReference(index) {
    this.updateAccount.references.splice(index, 1);
  }

}
