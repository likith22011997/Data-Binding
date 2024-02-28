import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  customers = [
    {
      name: "Babu",
      age: 45,
      child: [{
        childname: "Rakesh"
      }]
    },
    {
      name: "Sanjay",
      age: 45
    },
    {
      name: "Sharath",
      age: 20
    },
  ];

  constructor(private _httpClient: HttpClient) { }
  logging() {
    console.log("this is form logger service--logging method");
    // return "Angular Training";
    // returning data in customers string 
    return this.customers;
  }
  posturl = 'https://jsonplaceholder.typicode.com/todos/1'

  getMethod() {
    return this._httpClient.get(this.posturl).pipe(map(res => res));
    // .map(result => result.json());
  }

}
