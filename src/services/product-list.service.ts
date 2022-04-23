import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  productsList: any;

  constructor(
    private http: HttpClient
  ) {}

  getProductList() {
    return this.http.get('https://dummyjson.com/products');
  }

  setProductsList(products: any) {
    return this.productsList = products;
  }
}
