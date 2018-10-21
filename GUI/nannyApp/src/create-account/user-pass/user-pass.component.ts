import { Component, OnInit } from '@angular/core';
import { UserPass } from '../models/userpass';

@Component({
  selector: 'app-user-pass',
  templateUrl: './user-pass.component.html',
  styleUrls: ['./user-pass.component.css']
})
export class UserPassComponent implements OnInit {

  userpass: UserPass;

  constructor() { }

  ngOnInit() {
    this.userpass = {};
  }

}
