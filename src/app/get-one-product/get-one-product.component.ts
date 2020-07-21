import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/product';
import {ProductService} from '../shared/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-one-product',
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css']
})
export class GetOneProductComponent implements OnInit {

  // Start Region variables
  public product: IProduct;
  // End Region variables


  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id1 = +this.route.snapshot.paramMap.get('id');
    this._productService.getProduct(id1)
      .subscribe(data => this.product = data);
  }
}
