import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './products/pages/product-detail/product-detail.component';
import { ProductsComponent } from './products/pages/products/products.component';

const routes: Routes = [
  {
    path: "product-detail/:id", component: ProductDetailComponent
  },
  {
    path: "products",component: ProductsComponent
  },
  {
    path: "**", redirectTo: "/products"
  },
  {
    path: "", redirectTo: "/products", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
