import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';
import {ProductModel} from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // tslint:disable-next-line:variable-name
  private _url = 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct>{
    return this.http.get<IProduct>(this._url);
  }
  addProduct(product: ProductModel): Observable<IProduct>{
    return this.http.post<IProduct>(this._url, product);
  }
  getProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(this._url + '/' + id);
  }
  deleteProduct(id: number): Observable<IProduct>{
    return this.http.delete<IProduct>(this._url + '/' + id);
  }
}
