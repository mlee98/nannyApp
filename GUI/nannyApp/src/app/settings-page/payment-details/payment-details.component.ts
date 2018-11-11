import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor() { }

  isEditMode: Boolean = false;
  updatePayment: Payment;

  @Input()
  payment: Payment;

  ngOnInit() {
    this.updatePayment = this.payment;
  }

  clickInfo() {
    if (this.isEditMode) {
      this.payment = { ...this.updatePayment };
      this.isEditMode = false;
    } else {
      this.isEditMode = true;
    }
  }

}
