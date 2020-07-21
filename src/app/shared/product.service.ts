import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';
import {ProductModel} from './product-model';

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
  getProducts(): Observable<IProduct>{
    return this.http.get<IProduct>(this._url);
  }

  // Add a new product
  addProduct(product: ProductModel): Observable<IProduct>{
    return this.http.post<IProduct>(this._url, product);
  }

  // Edit a product
  editProduct(id: number, product: ProductModel): Observable<IProduct>{
    return this.http.put<IProduct>(this._url + '/' + id, product);
  }

  // Get one product
  getProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(this._url + '/' + id);
  }

  // Delete a product
  deleteProduct(id: number): Observable<IProduct>{
    return this.http.delete<IProduct>(this._url + '/' + id);
  }
}
