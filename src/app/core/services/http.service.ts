import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IRequestModel } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  request(method: string, url: string, body?: any, params?: HttpParams | { [param: string]: string | string[]; }, header?: HttpHeaders)
    : Observable<any> {
    const headers = header ? header : new HttpHeaders({
      'content-type': 'application/json; charset=utf-8',
    });
    const options: IRequestModel = {
      body: body,
      headers: headers,
      params: params,
    };
    return this.http.request(method, url, options)
      .pipe(
        catchError(this.handleError),
        finalize(() => {
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  get(url: string, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.request('GET', url, null, params, header);
  }

  post(url: string, body: any | null, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.request('POST', url, body, params, header);
  }

  postImage(url: string, body: any | null, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.http.post(url, body);
  }

  putImage(url: string, body: any | null, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.http.put(url, body);
  }

  put(url: string, body: any | null, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.request('PUT', url, body, params, header);
  }

  delete(url: string, body: any | null, header?: HttpHeaders, params?: HttpParams | { [param: string]: string | string[]; }): Observable<any> {
    return this.request('DELETE', url, body, params, header);
  }
}
