import { Component, OnInit} from '@angular/core';
import { Account } from './models/account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account;
  stepHideController: boolean[];
  currentStep: number;
  nextBtn: string;
  finalStepName: string;

  constructor() { }

  ngOnInit() {
    this.account = {};
    this.stepHideController = [false, true, true];
    this.nextBtn = 'Next';
    this.currentStep = 0;
    this.finalStepName = '';
    this.account.type = 'nanny';
  }

  next() {
    if (this.currentStep === 2) {
      this.generateAccount();
    } else {
      if (this.currentStep === 1) {
        this.nextBtn = 'Finish';
      }
      this.stepHideController[this.currentStep] = true;
      this.currentStep++;
      this.stepHideController[this.currentStep] = false;
    }
  }

  back() {
    this.nextBtn = 'Next';
    this.stepHideController[this.currentStep] = true;
    this.currentStep--;
    this.stepHideController[this.currentStep] = false;
  }

  generateAccount() {
    // Make the thing
  }

}
