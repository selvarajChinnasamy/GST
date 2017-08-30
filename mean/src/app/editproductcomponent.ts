import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Product} from './product';

@Component({
    selector: 'app-editproduct',
    templateUrl: './editproductcomponent.html',
    styleUrls: ['./editproductcomponent.css']
  })

  export class EditproductComponent{
    products : Array<any>[];
    searchproducts : Array<any>[];
    selectedItem : Product;
    constructor(private _dataService: DataService) {
        
            // Access the Data Service's getUsers() method we defined
            this._dataService.getData()
            .subscribe(res => this.products = this.searchproducts = res.products);
  }

  delete(){
    this._dataService.postDelete(this.selectedItem);
  }
  update (){
    console.log('update');
    this._dataService.postData(this.selectedItem);
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
    
          this.selectedItem = newValue;  // don't forget to update the model here
          // ... do other stuff here ...
      }
  }