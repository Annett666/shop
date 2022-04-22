import { Injectable } from '@angular/core';
import {ProductType} from "../types/ProductType";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  chosenProducts: ProductType[] = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: ProductType) {
    this.chosenProducts.push(product);
  }

  getChosenProducts() {
    return this.chosenProducts;
  }

  clearCart() {
    this.chosenProducts = [];
    return this.chosenProducts;
  }

  getShippingPrices() {
    return this.http.get('../assets/shipping.json')
  }
}
