import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/NotFound-error';
import { BadInput } from '../common/BadInput-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }
  creat(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handleError));
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(catchError(this.handleError));
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput());
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
