import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/models';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {

  @Input()
  child: Child;

  constructor() { }

  ngOnInit() {
  }

}
