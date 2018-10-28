import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-nanny-profile-page',
  templateUrl: './nanny-profile-page.component.html',
  styleUrls: ['./nanny-profile-page.component.css']
})
export class NannyProfilePageComponent implements OnInit {

  constructor() { }

  @Input() account: Account;

  ngOnInit() {
  }

}
