import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Product} from './product';

@Component({
    selector: 'app-bill',
    templateUrl: './billcomponent.html',
    styleUrls: ['./billcomponent.css']
  })

  export class BillComponent{

    products : Array<any>[];
    searchproducts : Array<any>[];
    selectedproducts : Product[] = [];
    gst : number = 0.0;
    constructor(private _dataService: DataService) {
        
            // Access the Data Service's getUsers() method we defined
            this._dataService.getData()
            .subscribe(res => this.products = this.searchproducts = res.products);
  }
  gstcalc()
  {
    this.selectedproducts.forEach(prod => {
      if(prod.Quantity==0){
        this.selectedproducts=null;  
      }
      else
        {
          this.gst = this.gst + ((prod.Gst*prod.Price) + prod.Price)*prod.Quantity;
        }
      });
  }
  filterItem(value){
    if(!value)
     {
       this.searchproducts = this.products;
     }
     //when nothing has typed
     this.searchproducts = Object.assign([], this.searchproducts).filter(
        item => item.Name.toLowerCase().indexOf(value.toLowerCase()) > -1
     )
  }

  listClick(newValue: Product) {
            this.selectedproducts.push(newValue);
         // don't forget to update the model here
          // ... do other stuff here ...
      }
  }