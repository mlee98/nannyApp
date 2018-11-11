import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Job, Account, Child } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountInfo {

  protected endPoint = 'https://fcd07054-eb96-4bfb-a380-03dd122aebda.mock.pstmn.io';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  getAccountById(id: number): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/accounts/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getChildrenById(id: number): Observable<Child[]> {
    return this.httpClient
      .get<Child[]>(`${this.endPoint}/accounts/children/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
