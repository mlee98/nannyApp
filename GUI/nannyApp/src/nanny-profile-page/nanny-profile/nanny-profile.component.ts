import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account';

@Component({
  selector: 'app-nanny-profile',
  templateUrl: './nanny-profile.component.html',
  styleUrls: ['./nanny-profile.component.css']
})
export class NannyProfileComponent implements OnInit {

  constructor() { }

  @Input() account: Account;

  ngOnInit() {
  }

}
