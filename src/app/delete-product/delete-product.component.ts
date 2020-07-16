import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/product';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  public product;
  public id = 1;
  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) { }
  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.id);
    this._productService.deleteProduct(this.id)
      .subscribe(data => this.product = data);
  }
}
