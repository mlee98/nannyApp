import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Account, Child } from '../models';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class AccountInfo {

  protected endPoint = 'ec2-18-216-55-181.us-east-2.compute.amazonaws.com';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  // Get Requests
  getAccountByUsername(username: string): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/accounts/${username}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getChildrenByUsername(username: string): Observable<Child[]> {
    return this.httpClient
      .get<Child[]>(`${this.endPoint}/accounts/children/${username}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getAutomaticPayByUsername(username: string): Observable<Payment> {
    return this.httpClient
      .get<Payment>(`${this.endPoint}/accounts/payments/${username}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  // Post Requests
  addAccount(account: Account): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/parents/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }
}
