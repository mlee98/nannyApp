import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NannyInfo, NannyReference } from '../../models';

@Component({
  selector: 'app-account-create-nanny',
  templateUrl: './account-create-nanny.component.html',
  styleUrls: ['./account-create-nanny.component.css']
})
export class AccountCreateNannyComponent implements OnInit {

  constructor() { }

  @Input()
  nannyInfo: NannyInfo;

  @Input()
  stepHideController: boolean[];

  @Output() finished = new EventEmitter();
  isFinished = false;

  referenceForm: boolean;
  tempRef: NannyReference = {};

  ngOnInit() {
  }

  finish() {
    this.isFinished = true;
    this.finished.emit(this.isFinished);
  }

  back() {
    this.stepHideController[2] = true;
    this.stepHideController[1] = false;
  }

  showReferenceForm() {
    this.referenceForm = true;
  }

  addReference() {
    this.nannyInfo.references.push(this.tempRef);
    this.referenceForm = false;
    this.tempRef = {name: ''};
  }

}
