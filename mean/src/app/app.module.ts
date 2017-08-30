import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent} from './addproduct.component';
import {BillComponent} from './billcomponent';
import {EditproductComponent} from './editproductcomponent';
//Routes

const appRoutes: Routes = [
  { path: 'add-product', component: AddproductComponent },
  { path: 'edit-product',      component: EditproductComponent },
  {  path: 'bill',  component: BillComponent },
  { path: '', redirectTo: '/bill', pathMatch: 'full' },
  { path: '**', component: AddproductComponent }
];

//Module 

@NgModule({
  declarations: [
    AppComponent,AddproductComponent,BillComponent,EditproductComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
