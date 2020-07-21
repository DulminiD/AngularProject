import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/product';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  // Start Region variables
  public product;
  public id = 1;
  // End Region variables

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) { }
  ngOnInit(): void {
  }

  // Submit Button clicked
  onSubmit(): void{
    console.log(this.id);
    this._productService.deleteProduct(this.id)
      .subscribe(data => this.product = data);
  }
}
