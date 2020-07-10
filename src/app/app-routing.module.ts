import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetProductsComponent} from './get-products/get-products.component';
import {AddProductComponent} from './add-product/add-product.component';
import {GetOneProductComponent} from './get-one-product/get-one-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';

const routes: Routes = [
  { path: 'getData', component: GetProductsComponent },
  { path: 'addData', component: AddProductComponent },
  { path: 'getOneData/:id', component: GetOneProductComponent },
  { path: 'deleteData', component: DeleteProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GetProductsComponent, AddProductComponent, GetOneProductComponent, DeleteProductComponent];
