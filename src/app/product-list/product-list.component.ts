import { Component, OnInit } from '@angular/core';
// import { products } from "../../constants/products";
import {ProductType} from "../../types/ProductType";
import {ProductListService} from "../../services/product-list.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products?: ProductType[];

  constructor(
    private productsService: ProductListService,
    private http: HttpClient,
  ) {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    if (this.productsService.productsList) {
      this.products = this.productsService.productsList;
    } else {
      this.productsService.getProductList().subscribe((data: any) => {
        this.products = data.products;
        this.productsService.setProductsList(this.products);
      })
    }
  }
}
