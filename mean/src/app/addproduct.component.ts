import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Product} from './product';

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.css']
  })
  export class AddproductComponent{

    products : Array<any>[];
    searchproducts : Array<any>[];
    selectedItem : Product;
    addItem : Product = {
        pid: 0,
        Name: '',
        Price: 0,
        Gst: 0,
        Quantity: 0
    };

    Addproduct(){

            console.log(this.addItem);
            this._dataService.postDataadd(this.addItem);
    }
    constructor(private _dataService: DataService) {
        
            // Access the Data Service's getUsers() method we defined
            this._dataService.getData()
            .subscribe(res => this.products = this.searchproducts = res.products);
  }

  listClick(newValue: Product) {
    
          this.selectedItem = newValue;  // don't forget to update the model here
          // ... do other stuff here ...
      }
}