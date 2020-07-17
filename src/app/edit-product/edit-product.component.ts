import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/product-model';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../shared/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public productModel = new ProductModel(null, '', '');
  product: IProduct;
  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Have to send the product model
    this._productService.editProduct(this.productModel.id , this.productModel ).subscribe(
      data => this.product = data,
      error => console.log('Error', error)
    );
  }
}
