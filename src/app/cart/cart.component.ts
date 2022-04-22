import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductType} from "../../types/ProductType";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartContents?: ProductType[];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.cartContents = this.cartService.getChosenProducts();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
  }

  onSubmit(customerData: any) {
    window.alert('Your order has been submitted');
    console.log(customerData);

    this.cartContents = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }
}
