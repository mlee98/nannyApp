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

  protected endPoint = 'http://ec2-18-222-217-188.us-east-2.compute.amazonaws.com:8080';

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

  private typeSource = new BehaviorSubject('');
  currentUserType = this.typeSource.asObservable();

  changeId(username: string) {
    this.idSource.next(username);
  }

  changeType(type: string) {
    this.typeSource.next(type);
  }

  getType() {
    return this.typeSource.getValue();
  }

  getusername() {
    return this.idSource.getValue();
  }


  login(login: Login): Observable<string> {
    return this.httpClient
      .post<string>(`${this.endPoint}/login`, login, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }

}
