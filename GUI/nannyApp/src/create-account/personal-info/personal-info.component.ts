import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../models/personalinfo';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalinfo: PersonalInfo;

  constructor() { }

  ngOnInit() {
    this.personalinfo = {};
  }

}
