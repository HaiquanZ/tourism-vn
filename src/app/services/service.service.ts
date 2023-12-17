import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  protected http: HttpClient;
  constructor(
    private injector: Injector
  ) {
    this.http = injector.get(HttpClient);
  }

  getById(option: any, callBack: Function): any {
    this.http.get(`http://25.44.206.136:3000/tours/${option}`, { observe: 'response' }).subscribe(
      (response) => {
        if (response.body) {
          callBack(response.body);
        }
      },
      (error) => {
        if (callBack) {
          callBack(null);
          console.log(error);
        }
      }
    )
  }
}
