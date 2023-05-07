import { Injectable } from '@angular/core';
import  {HttpClient } from'@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;

  constructor( private _http:HttpClient) { }

  getAllProducts(){
   return this._http.get(environment.basicApi+'products' );
  }

  getAllCategory(){
    return this._http.get(environment.basicApi+"products/categories");
  }
  getProduct(category:any){
    return this._http.get(environment.basicApi+`products/category/${category}`)

  }
}
