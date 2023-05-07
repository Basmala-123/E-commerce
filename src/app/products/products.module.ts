import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductComponent } from './component/allproduct/allproduct.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllproductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AllproductComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
