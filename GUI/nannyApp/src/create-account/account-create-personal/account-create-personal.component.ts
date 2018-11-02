import { Component, OnInit, Input } from '@angular/core';
import { PersonalInfo } from 'src/models';

@Component({
  selector: 'app-account-create-personal',
  templateUrl: './account-create-personal.component.html',
  styleUrls: ['./account-create-personal.component.css']
})
export class AccountCreatePersonalComponent implements OnInit {

  @Input()
  personalInfo: PersonalInfo = {};

  @Input()
  stepHideController: boolean[];

  @Input()
  accType: string;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.stepHideController[1] = true;
    if (this.accType === 'nanny') {
      this.stepHideController[2] = false;
    } else {
      this.stepHideController[3] = false;
    }
  }

  back() {
    this.stepHideController[1] = true;
    this.stepHideController[0] = false;
  }

}
