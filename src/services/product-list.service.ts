import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/ProductType";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  productsList: ProductType[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getProductsList(skipParam?: number) {
    return this.http.get(`https://dummyjson.com/products?limit=10&skip=${skipParam}`);
  }

  setProductsList(products: ProductType[]) {
    return this.productsList = products;
  }
}
