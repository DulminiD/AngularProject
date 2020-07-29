import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Start Region variables
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/products';
  // End Region variables


  constructor(private http: HttpClient) { }

  // Get all the products
  async getProducts(): Promise<ProductModel>{
    const asyncResult = await this.http.get(this._url).toPromise();
    console.log(asyncResult);
    // @ts-ignore
    return asyncResult;
  }

  // Add a new product
  async addProduct(product: ProductModel): Promise<ProductModel>{
    console.log(product);
    const asyncResult = await this.http.post<ProductModel>(this._url, product).toPromise();
    // @ts-ignore
    return asyncResult;
  }

  // Edit a product
  // @ts-ignore
  async editProduct(id: number, product: ProductModel): Promise<ProductModel> {
    const asyncResult = await this.http.put<ProductModel>(this._url + '/' + id, product).toPromise();
    // @ts-ignore
    return asyncResult;
  }

  // Get one product
  // @ts-ignore
  async getProduct(id: number): Promise<ProductModel>{
    const asyncResult = await this.http.get<ProductModel>(this._url + '/' + id).toPromise();
    console.log(asyncResult);
    // @ts-ignore
    return asyncResult;
  }

  // Delete a product
  async deleteProduct(id: number): Promise<ProductModel>{
    const asyncResult = await this.http.delete<ProductModel>(this._url + '/' + id).toPromise();
    // @ts-ignore
    return asyncResult;
  }
}
