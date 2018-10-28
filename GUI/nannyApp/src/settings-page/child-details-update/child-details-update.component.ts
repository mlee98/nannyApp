import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../../models/child';

@Component({
  selector: 'app-child-details-update',
  templateUrl: './child-details-update.component.html',
  styleUrls: ['./child-details-update.component.css']
})
export class ChildDetailsUpdateComponent implements OnInit {

  constructor() { }

  @Input() child: Child;

  ngOnInit() {
  }

}
