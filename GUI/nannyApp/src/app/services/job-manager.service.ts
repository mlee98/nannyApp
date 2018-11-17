import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Job, Task } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JobManager {

  protected endPoint = 'https://fcd07054-eb96-4bfb-a380-03dd122aebda.mock.pstmn.io';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

constructor(
  protected httpClient: HttpClient
) { }

addJob(newJob: Job): Observable<Job> {
  return this.httpClient
    .post<Job>(`${this.endPoint}/jobs/new`, newJob, this.httpOptions)
    .pipe(catchError(this.handleException));
}

acceptJob(jobId: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/accept`, jobId, this.httpOptions)
    .pipe(catchError(this.handleException));
}

declineJob(jobId: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/decline`, jobId, this.httpOptions)
    .pipe(catchError(this.handleException));
}

updateTasks(taskNames: string[], taskDays: string[], jobId: number): Observable<Task[]> {
  return this.httpClient
    .put<Task[]>(`${this.endPoint}/jobs/update/${jobId}`, {taskNames: taskNames, taskDays: taskDays}, this.httpOptions)
    .pipe(catchError(this.handleException));
}

submitRating(rating: number, nannyUsername: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/ratings/${nannyUsername}`, rating, this.httpOptions)
    .pipe(catchError(this.handleException));
}

completeJob(jobId: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/complete`, jobId, this.httpOptions)
    .pipe(catchError(this.handleException));
}


protected handleException(exception: any) {
  const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
  alert(message);
  return Observable.throw(exception);
}

}
