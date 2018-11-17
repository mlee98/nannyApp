import { Component, OnInit } from '@angular/core';
import { SearchField } from '../models';
import { Router } from '@angular/router';
import { LoginInfo } from '../services/login-info.service';
import { NannySearch } from '../services/nanny-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchField: SearchField;
  childAgeRange: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  nannyAges: {min: number, max: number}[] = [{min: 18, max: 25}, {min: 26, max: 35},
              {min: 36, max: 45}, {min: 46, max: 50}, {min: 50, max: 100}];
  nannyAge: number;
  gender: number;
  nannys: Account[];

  constructor(
    private loginInfo: LoginInfo,
    private router: Router,
    private nannySearch: NannySearch
  ) { }

  ngOnInit() {
    this.nannyAge = 0;
    this.gender = 0;
    this.searchField = {
      gender: 'gender',
      minNannyAge: 0,
      maxNannyAge: 0,
      minChildAge: 0,
      maxChildAge: 17,
      experience: 0
    };
  }

  search() {
    this.searchField.minNannyAge = this.nannyAges[this.nannyAge].min;
    this.searchField.maxNannyAge = this.nannyAges[this.nannyAge].max;
    /*this.nannySearch.search(this.searchField).subscribe((nannys) => {
      this.nannys = nannys;
    });*/
  }

}
