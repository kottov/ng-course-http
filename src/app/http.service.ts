import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://myapp-c2471.firebaseio.com/title.json')
      .map((data: Response) => data.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://myapp-c2471.firebaseio.com/data.json', body, { headers: headers })
      .map((data: Response) => data.json())
      .catch(this.errorHandler);
  }

  getOwnData() {
    return this.http.get('https://myapp-c2471.firebaseio.com/data.json')
      .map((data: Response) => data.json());
  }

  errorHandler(error: any): Observable<any> {
    console.log(error);
    return Observable.throw(error.json());
  }
}
