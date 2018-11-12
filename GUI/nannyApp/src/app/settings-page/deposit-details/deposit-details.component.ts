import { Component, OnInit, Input } from '@angular/core';
import { Deposit } from 'src/app/models/deposit';

@Component({
  selector: 'app-deposit-details',
  templateUrl: './deposit-details.component.html',
  styleUrls: ['./deposit-details.component.css']
})
export class DepositDetailsComponent implements OnInit {

  constructor() { }

  isEditMode: Boolean = false;
  updateDeposit: Deposit;
  @Input() deposit: Deposit;

  ngOnInit() {
    this.updateDeposit = this.deposit;
  }

  clickInfo() {
    if (this.isEditMode) {
      this.deposit = this.updateDeposit;
      this.isEditMode = false;
    } else {
      this.isEditMode = true;
    }
  }

}
