import { Injectable } from '@angular/core';
import { IProduct } from '../models/Iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly urlAPI: string = "https://fakestoreapi.com/products";
  public arrProduct: Array<IProduct> = [];

  constructor(private httpClient: HttpClient) { }


  getAll(): Array<IProduct>{
    this.httpClient.get(this.urlAPI).subscribe(
      (data: any) => {
        this.arrProduct = data;
      }
    );

    return [];
  }

  create(product: IProduct): void{

  }

  edit(product: IProduct): void{

  }

  delete(product: IProduct): void{

  }

}
