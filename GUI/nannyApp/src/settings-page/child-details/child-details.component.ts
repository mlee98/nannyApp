import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../../models/child';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  constructor() { }

  @Input() child: Child;

  ngOnInit() {
  }

}
