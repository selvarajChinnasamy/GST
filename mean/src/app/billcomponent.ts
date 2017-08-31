import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Product} from './product';
import {Bill} from './product'; 
import {Selected} from './product'; 
@Component({
    selector: 'app-bill',
    templateUrl: './billcomponent.html',
    styleUrls: ['./billcomponent.css']
  })

  export class BillComponent{

    products : Array<any>[];
    searchproducts : Array<any>[];
    selectedproducts : Array<Selected>=[];
    bill : Bill;
    set : number=0;
    gst : number = 0.0;
    constructor(private _dataService: DataService) {
        
            // Access the Data Service's getUsers() method we defined
            this._dataService.getData()
            .subscribe(res => this.products = this.searchproducts = res.products);
  }
  gstcalc()
  {
    // this.selectedproducts.forEach(prod => {
    //   if(prod.Quantity==0){
    //     this.selectedproducts=null;  
    //   }
    //   else
    //     {
    //       this.gst = this.gst + ((prod.Gst*prod.Price) + prod.Price)*prod.Quantity;
    //     }
    //   });
    var index=0;
    this.gst=0;
for (index = 0; index < this.selectedproducts.length; ++index) {
   var item = this.selectedproducts[index];
   var cost =((item.Gst*item.oners)+item.oners)*item.Quantity;
   this.selectedproducts[index].Price=cost;
    this.gst=this.gst+cost;
}
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
    console.log(newValue);
    var hasMatch =false;
    var index=0;
    for (index = 0; index < this.selectedproducts.length; ++index) {
      
       var animal = this.selectedproducts[index];
      
       if(animal.pid == newValue.pid){
         hasMatch = true;
         break;
       }
      }
      if(hasMatch==false)
        {
            var cost =(newValue.Gst*newValue.Price) +newValue.Price;
            this.selectedproducts.push({'pid': newValue.pid ,'Name':newValue.Name,'Price':cost,'Gst':newValue.Gst,'Quantity':1,'oners':newValue.Price});
       }
      }
    }