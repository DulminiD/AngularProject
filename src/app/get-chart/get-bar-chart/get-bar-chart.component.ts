import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {IProduct} from '../../shared/product';

@Component({
  selector: 'app-get-bar-chart',
  templateUrl: './get-bar-chart.component.html',
  styleUrls: ['./get-bar-chart.component.css']
})
export class GetBarChartComponent implements OnInit {

  // Start Region variables
  public products: IProduct;
  xArray = [];
  yArray = [];
  length = 0;
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.yArray , label: 'Products'}
  ];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  // End Region variables

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.length = 0;
    this._productService.getProducts()
      .subscribe(data => {this.products = data;
                          // @ts-ignore
                          for (const len of data){
                            this.length++;
                            this.yArray.push(len.price);
                          }
                          console.log(this.length);
        // tslint:disable-next-line:prefer-for-of
                          for (let i = 0 ; i < this.length; i++){
                            this.xArray.push(i + '');
                          }
                          console.log(this.xArray);
                          console.log(this.yArray);
                          this.barChartLabels = this.xArray;
      });
  }

}
