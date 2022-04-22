import {Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const appRoutes: Routes = [
  { path: 'store', component: ProductListComponent },
  { path: 'store/:productId', component: ProductDetailsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
