import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {IProduct} from '../shared/product';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  // Start Region variables
  public products: IProduct;
  public getone: boolean;
  // End Region variables

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(data => this.products = data);
  }
  onClick(): void{
    this.getone = true;
  }

}
