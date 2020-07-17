import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/product-model';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public productModel = new ProductModel(5, 'Laptop', '2000');
  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this._productService.addProduct(this.productModel).subscribe(
      data => console.log('success', data),
      error => console.log('Error', error)
    );
  }
}
