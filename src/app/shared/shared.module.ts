import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './component/loader/loader.component';
import { SelectComponent } from './component/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    LoaderComponent,
    SelectComponent
  ]
})
export class SharedModule { }
