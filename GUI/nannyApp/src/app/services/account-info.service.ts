import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Account, Child, NannyDetails } from '../models';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class AccountInfo {

  protected endPoint = 'http://ec2-18-222-217-188.us-east-2.compute.amazonaws.com:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  // Get Requests
  getAccountByUsername(username: string, type: string): Observable<Account> {
    return this.httpClient
      .get<Account>(`${this.endPoint}/account/${username}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getChildrenByUsername(username: string): Observable<Child[]> {
    return this.httpClient
      .get<Child[]>(`${this.endPoint}/children/${username}`, this.httpOptions)
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
      .post<Account>(`${this.endPoint}/account/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getNannyInfo(username: string): Observable<NannyDetails> {
    return this.httpClient
      .get<NannyDetails>(`${this.endPoint}/nanny_info/${username}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addChild(child: Child): Observable<Child> {
    return this.httpClient
      .post<Child>(`${this.endPoint}/children/new`, child, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }
}
