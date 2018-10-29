import { Component, OnInit} from '@angular/core';
import { Account } from '../models/account';
import { NannyReference } from '../models/nanny-reference';
import { Child } from '../models/child';

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
  referenceForm: boolean;
  childForm: boolean;
  tempRef: NannyReference;
  tempChild: Child;

  constructor() { }

  ngOnInit() {
    this.account = {};
    this.stepHideController = [false, true, true];
    this.nextBtn = 'Next';
    this.currentStep = 0;
    this.finalStepName = '';
    this.account.type = 'nanny';
    this.referenceForm = false;
    this.childForm = false;
    this.account.references = [];
    this.account.children = [];
    this.tempRef = {};
    this.tempChild = {};

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

  showReferenceForm() {
    this.referenceForm = true;
  }

  addReference() {
    this.account.references.push(this.tempRef);
    this.referenceForm = false;
    this.tempRef = {name: ''};
  }

  showChildForm() {
    this.childForm = true;
  }

  addChild() {
    this.account.children.push(this.tempChild);
    this.childForm = false;
    this.tempChild = {name: ''};
  }



  generateAccount() {
    // Make the thing
  }

}
