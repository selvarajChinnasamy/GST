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
    console.log('Prod');
    console.log(prod);
    return this._http.post("/api/update",prod).subscribe();
  }

  postDataadd(prod: Product) {
    console.log('Add  Product');
    console.log(prod);
    return this._http.post("/api/addproduct",prod).subscribe();
  }

  postDelete(prod: Product) {
    console.log('Add  Product');
    console.log(prod);
    return this._http.post("/api/deleteproduct",prod).subscribe();
  }

}