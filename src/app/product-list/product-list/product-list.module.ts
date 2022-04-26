import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "../product-list.component";
import {ProductAlertsComponent} from "../../product-alerts/product-alerts.component";
import {ProductDetailsComponent} from "../../product-details/product-details.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class ProductListModule { }
