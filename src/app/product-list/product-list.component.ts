import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductType} from "../../types/ProductType";
import {ProductListService} from "../../services/product-list.service";
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild('paginator') paginator?: MatPaginator;

  products: ProductType[] = [];
  pageEvent?: PageEvent | null;
  pageSkipParam: number = 0;
  pageSize?: number;
  length?: number;

  constructor(
    private productsService: ProductListService,
  ) {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    this.getServerData(null);
  }

  getServerData(event?: PageEvent | null) {
    this.setSkipParam(event);
    this.productsService.getProductsList(this.pageSkipParam).subscribe(
      (response: any) => {
        if (response.error) {
          alert('Something was wrong')
        } else {
          this.pageSize = response.limit;
          this.length = response.total;

          this.products = response.products;
          this.productsService.setProductsList(this.products);
        }
      },
    );
    return event;
  }

  setSkipParam(event?: PageEvent | null) {
    if (event?.previousPageIndex !== undefined && this.paginator !== undefined) {
      if (event?.previousPageIndex > this.paginator?.pageIndex) {
        this.pageSkipParam -= 10;
      }

      if (event.previousPageIndex < this.paginator.pageIndex) {
        this.pageSkipParam += 10;
      }
    }
  }
}
