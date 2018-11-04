import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentInfo, Child } from '../../models';

@Component({
  selector: 'app-account-create-parent',
  templateUrl: './account-create-parent.component.html',
  styleUrls: ['./account-create-parent.component.css']
})
export class AccountCreateParentComponent implements OnInit {

  constructor() { }

  @Input()
  parentInfo: ParentInfo;

  @Input()
  stepHideController: boolean[];

  @Output() finished = new EventEmitter();
  isFinished = false;

  childForm = false;
  tempChild: Child = {};

  ngOnInit() {
  }

  finish() {
    this.isFinished = true;
    this.finished.emit(this.isFinished);
  }

  back() {
    this.stepHideController[3] = true;
    this.stepHideController[1] = false;
  }

  showChildForm() {
    this.childForm = true;
  }

  addChild() {
    this.parentInfo.children.push(this.tempChild);
    this.childForm = false;
    this.tempChild = {name: ''};
  }

}
