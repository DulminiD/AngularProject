import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetProductsComponent} from './product/get-products/get-products.component';
import {AddProductComponent} from './product/add-product/add-product.component';
import {GetOneProductComponent} from './product/get-one-product/get-one-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {GetChartComponent} from './product/get-chart/get-chart.component';

const routes: Routes = [
  { path: 'getData', component: GetProductsComponent },
  { path: 'addData', component: AddProductComponent },
  { path: 'getOneData/:id', component: GetOneProductComponent },
  { path: 'deleteData', component: DeleteProductComponent },
  { path: 'editData', component: EditProductComponent },
  { path: 'getChart', component: GetChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetProductsComponent, AddProductComponent, GetOneProductComponent, DeleteProductComponent];
