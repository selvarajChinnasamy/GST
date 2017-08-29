import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Product} from './product';
@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getData() {
    return this._http.get("/api/products")
      .map(result => this.result = result.json());
  }
  postData(prod: Product) {
    console.log('update1');
    return this._http.post("/api/update",JSON.stringify(prod)).subscribe();
  }
}