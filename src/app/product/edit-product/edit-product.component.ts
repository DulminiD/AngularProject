import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/models/product-model';
import {ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  // Start Region variables
  public productModel = new ProductModel(null, '', '');
  product: ProductModel;
  // End Region variables

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Submit Button clicked
  onSubmit(): void {
    // Have to send the product model
    this._productService.editProduct(this.productModel.id , this.productModel ).then(
      data => this.product = data,
      error => console.log('Error', error)
    );
  }
}
