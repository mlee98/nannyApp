import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginInfo {

  protected endPoint = 'https://c4e8de50-d466-4c4d-8976-655c4f37d9e7.mock.pstmn.io';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  private idSource = new BehaviorSubject(0);
  currentUserId = this.idSource.asObservable();

  changeId(id: number) {
    this.idSource.next(id);
  }


  login(login: Login): Observable<Login> {
    return this.httpClient
      .post<Login>(`${this.endPoint}/login`, login, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }

}
