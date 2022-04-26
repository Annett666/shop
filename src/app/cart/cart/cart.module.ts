import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from "../cart.component";
import {ShippingComponent} from "../../shipping/shipping.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CartModule {
}
