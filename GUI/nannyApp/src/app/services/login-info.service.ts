import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Login, Account } from '../models';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable({
  providedIn: 'root'
})
export class LoginInfo {

  protected endPoint = 'http://ec2-18-216-55-181.us-east-2.compute.amazonaws.com:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  private idSource = new BehaviorSubject('');
  currentUserId = this.idSource.asObservable();

  changeId(username: string) {
    this.idSource.next(username);
  }


  login(login: Login): Observable<Login> {
    return this.httpClient
      .post<Login>(`${this.endPoint}/login`, login, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  test(): Observable<{username: string, password: string, first_name: string, last_name: string,
    age: string, gender: string, address: string, city: string, state: string,
    zip: number, email: string, phone_number: string}> {
    return this.httpClient
      .post<{username: string, password: string, first_name: string, last_name: string,
        age: string, gender: string, address: string, city: string, state: string,
        zip: number, email: string, phone_number: string}>(`${this.endPoint}/parents`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }

}
