import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginInfo {

  protected endPoint = 'ec2-18-216-55-181.us-east-2.compute.amazonaws.com:8080';

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

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return throwError(exception);
  }

}
