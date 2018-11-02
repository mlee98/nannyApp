import { Component, OnInit, Input } from '@angular/core';
import { Account, Child } from '../../models';

@Component({
  selector: 'app-child-details-container',
  templateUrl: './child-details-container.component.html',
  styleUrls: ['./child-details-container.component.css']
})
export class ChildDetailsContainerComponent implements OnInit {

  constructor() { }

  @Input() account: Account;
  updateChildren: Child[] = [];
  isEditMode: Boolean = false;

  ngOnInit() {
    this.account.children.map(child => this.updateChildren.push(child));
  }

  clickInfo() {
    if (this.isEditMode) {
      this.account.children = [];
      this.updateChildren.map(child => this.account.children.push(child));
    }
    this.isEditMode = !this.isEditMode;
  }

  addChild() {
    this.updateChildren.push(new Child);
  }

  removeChild(index) {
    this.updateChildren.splice(index, 1);
  }

}
