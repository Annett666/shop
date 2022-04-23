import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../types/ProductType";
import {CartService} from "../../services/cart.service";
import {ProductListService} from "../../services/product-list.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: ProductType;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductListService,
) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.productsList[+params.get('productId')! - 1];
    });
  }

  addToCart(product: ProductType) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
