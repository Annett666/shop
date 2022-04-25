import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

  shipping: any;

  constructor(
    private cartService: CartService,
  ) {
    this.shipping = this.cartService.getShippingPrices();
  }
}
