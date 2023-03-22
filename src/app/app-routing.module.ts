import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/products/products.component';

const routes: Routes = [
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
