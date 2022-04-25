import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductType} from "../../types/ProductType";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: ProductType;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
