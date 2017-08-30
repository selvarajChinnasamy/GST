import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i=0;
  title = [ "Ford", "BMW", "Fiat" ];
  selectedItem : Product;
  products : Array<any>[];
  addbill : Array<any>[];
  searchproducts : Array<any>[];
  //agg product to billing
// productbill(newValue: Product){
//   this.addbill.push( new (newValue));
// }
    //List click listener
    listClick(newValue: Product) {

      this.selectedItem = newValue;  // don't forget to update the model here
      // ... do other stuff here ...
  }
  update (){
    console.log('update');
    this._dataService.postData(this.selectedItem);
  }
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  
      // Access the Data Service's getUsers() method we defined
      this._dataService.getData()
          .subscribe(res => this.products = this.searchproducts = res.products);
    }
    //Search event
 
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
  
}
