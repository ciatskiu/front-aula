import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL : string = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get<Product[]>(`${this.apiURL}/products`);
  }

  listarProduto(id: string){
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  adicionarProduto(produto: Product){
    return this.http.post(`${this.apiURL}/products/`, produto);
  }

  editarProduto(id: string, produto: Product){
    return this.http.put(`${this.apiURL}/products/${id}`, produto);
  }

  excluirProduto(id: string){
    return this.http.delete(`${this.apiURL}/products/${id}`);
  }


}
