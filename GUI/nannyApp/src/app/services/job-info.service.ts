import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Job } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JobInfo {

  protected endPoint = 'https://fcd07054-eb96-4bfb-a380-03dd122aebda.mock.pstmn.io';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    protected httpClient: HttpClient
  ) {}

  getNannyJobsById(id: number): Observable<Job[]> {
    return this.httpClient
      .get<Job[]>(`${this.endPoint}/nannyJobs/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  getParentJobsById(id: number): Observable<Job[]> {
    return this.httpClient
      .get<Job[]>(`${this.endPoint}/parentJobs/${id}`, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  addJob(job: Job): Observable<Job> {
    return this.httpClient
      .post<Job>(`${this.endPoint}/parentJobs/new`, job, this.httpOptions)
      .pipe(catchError(this.handleException));
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
