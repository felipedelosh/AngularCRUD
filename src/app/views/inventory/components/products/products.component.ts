import { Component } from '@angular/core';
import { IProduct } from './models/Iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  arrProduct: Array<IProduct> = [];

  constructor(){}


  ngOnInit(){

  }

}
