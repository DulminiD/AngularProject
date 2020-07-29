import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/models/product-model';
import {ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-one-product',
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css']
})
export class GetOneProductComponent implements OnInit {

  // Start Region variables
  public product: ProductModel;
  // End Region variables


  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id1 = +this.route.snapshot.paramMap.get('id');
    this._productService.getProduct(id1)
      .then((data) => { this.product = data; console.log(data); } );
  }
}
