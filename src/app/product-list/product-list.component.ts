import { Component, OnInit } from '@angular/core';
import { products } from "../../constants/products";
import {ProductType} from "../../types/ProductType";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  productsList: ProductType[] = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }

}
