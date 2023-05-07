import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './products/component/allproduct/allproduct.component';
import { CartComponent } from './cart/component/cart/cart.component';
import { ProductDetailComponent } from './products/component/product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'product',component:AllproductComponent},
  {path:'cart',component:CartComponent},
  {path:'details',component:ProductDetailComponent},
  {path:"**",redirectTo:"product",pathMatch:"full"}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
