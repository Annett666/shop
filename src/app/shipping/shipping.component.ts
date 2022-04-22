import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ShippingType} from "../../types/ShippingType";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shipping: any;

  constructor(
    private cartService: CartService,
  ) {
    this.shipping = this.cartService.getShippingPrices();
  }

  ngOnInit(): void {
  }

}
