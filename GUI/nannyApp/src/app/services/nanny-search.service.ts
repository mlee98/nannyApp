import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchField } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NannySearch {
  protected endPoint = 'https://fcd07054-eb96-4bfb-a380-03dd122aebda.mock.pstmn.io';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  search(searchField: SearchField): Observable<Account[]> {
    return this.httpClient
      .post<Account[]>(`${this.endPoint}/search`, searchField, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }

}
