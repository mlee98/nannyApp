import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  constructor() { }

  @Input() account: Account;

  ngOnInit() {}

}
