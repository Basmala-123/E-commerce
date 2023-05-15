import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit{
  products:any[]=[];
  Categories:string[]=[];
  filterPrd:any[]=[];
  loading:boolean=false;
  constructor(private _service:ProductsService){}
    ngOnInit(): void {
      this.getProducts();
      this.getCategories();
    }

  getProducts(){
    this.loading=true;
    this._service.getAllProducts().subscribe((res:any)=>{
     this.loading=false;
      this.products=res;
    },err=>{
      this.loading=false;
      alert('error')
    } )
  }
  getCategories(){
    this.loading=true;
    this._service.getAllCategory().subscribe((res:any)=>{
      this.loading=false;
      this.Categories=res;
    },err=>{
      this.loading=false;
      alert("error with fetching category api");
    }
  )}


filterProduct(e:any){
  let value=e.target.value;
  (value=='all') ?this.getProducts(): this.getPrdByCategory(value);
  }
 getPrdByCategory(category:string){
  this.loading=true;
  this._service.getProduct(category).subscribe((res:any)=>{
    this.loading=false;
  this.products=res;
  } )
 }

  addToCart(){}
}
