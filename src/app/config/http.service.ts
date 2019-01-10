import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  httpGet(url: any) {
    return this.httpClient.get(url, httpOptions)
      .pipe(
        tap(response => {
          return response;
        })
      );
  }

  httpPost(url: any, body: any) {
    return this.httpClient.post(url, body, httpOptions)
      .pipe(
        tap(() => {
          return;
        })
      );
  }
}
