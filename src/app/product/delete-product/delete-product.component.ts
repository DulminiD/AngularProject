import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';

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
    this._productService.deleteProduct(this.id)
      .then(data => this.product = data);
  }
}
