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

  protected endPoint = 'ec2-18-216-55-181.us-east-2.compute.amazonaws.com:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  // Get Requests
  getAccountByUsername(username: string): Observable<{username: string, password: string, first_name: string, last_name: string,
    age: number, gender: string, address: string, city: string, state: string, zip: number,
    email: string, phone_number: string}> {
    return this.httpClient
      .get<{username: string, password: string, first_name: string, last_name: string,
        age: number, gender: string, address: string, city: string, state: string, zip: number,
        email: string, phone_number: string}>(`${this.endPoint}/accounts/${username}`, this.httpOptions)
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
      .post<Account>(`${this.endPoint}/accounts/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addParent(account: {username: string, password: string, first_name: string, last_name: string,
    age: number, gender: string, address: string, city: string, state: string, zip: number,
    email: string, phone_number: string}
    ): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/parents/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addNanny(account: {username: string, password: string, first_name: string, last_name: string,
    age: number, gender: string, address: string, city: string, state: string, zip: number,
    email: string, phone_number: string}
    ): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/nannys/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addChild(account: {parent_username: string, name: string,
    age: number, gender: string, likes: string, allergies: string, medications: string, special_requirements: string}
    ): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/children/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addReference(references: {nanny_username: string, name: string,
    phone_number: string, email: string}
    ): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/references/new`, references, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addLogin(account: {account_type: string, username: string, password: string}): Observable<Account> {
    return this.httpClient
      .post<Account>(`${this.endPoint}/login/new`, account, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }
}
