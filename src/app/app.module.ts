import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/pages/products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './products/pages/product-detail/product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule, FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
