import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Job, Task, Account } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JobManager {

  protected endPoint = 'http://ec2-18-222-217-188.us-east-2.compute.amazonaws.com:8080';

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

constructor(
  protected httpClient: HttpClient
) { }

getJobsByUsername(username: string, type: string): Observable<Job[]> {
  return this.httpClient
    .get<Job[]>(`${this.endPoint}/jobs/${type}/${username}`, this.httpOptions)
    .pipe(catchError(this.handleException));
}

getTasksByJobId(jobId: number): Observable<Job[]> {
  return this.httpClient
    .get<Job[]>(`${this.endPoint}/tasks/${jobId}`, this.httpOptions)
    .pipe(catchError(this.handleException));
}

addJob(newJob: Job): Observable<Job> {
  return this.httpClient
    .post<Job>(`${this.endPoint}/job/new`, newJob, this.httpOptions)
    .pipe(catchError(this.handleException));
}

acceptJob(jobId: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/accept/${jobId}`, jobId, this.httpOptions)
    .pipe(catchError(this.handleException));
}

declineJob(jobId: number): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/decline/${jobId}`, jobId, this.httpOptions)
    .pipe(catchError(this.handleException));
}

updateTasks(jobId: number, task: Task): Observable<Task[]> {
  return this.httpClient
    .put<Task[]>(`${this.endPoint}/jobs/update/${jobId}`, task, this.httpOptions)
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

submitRequest(jobId: number, nanny: string): Observable<number> {
  return this.httpClient
    .put<number>(`${this.endPoint}/jobs/submitRequest`, {job_id: jobId, nannyUsername: nanny}, this.httpOptions)
    .pipe(catchError(this.handleException));
}

protected handleException(exception: any) {
  const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
  alert(message);
  return throwError(exception);
}

}
