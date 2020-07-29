import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../shared/models/product-model';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-get-doughnut-chart',
  templateUrl: './get-doughnut-chart.component.html',
  styleUrls: ['./get-doughnut-chart.component.css']
})
export class GetDoughnutChartComponent implements OnInit {

  // Start Region variables
  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  private products: ProductModel;
  length = 0;
  xArray = [];
  yArray = [];
  // End Region variables

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.length = 0;
    this._productService.getProducts()
      .then(data => {
        this.products = data;
        // @ts-ignore
        for (const len of data) {
          this.length++;
          this.yArray.push(len.price);
          this.xArray.push(len.name);
        }
        this.doughnutChartLabels = this.xArray;
        this.doughnutChartData = this.yArray;
      });
  }
}
