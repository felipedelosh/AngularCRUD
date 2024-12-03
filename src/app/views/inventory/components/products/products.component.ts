import { Component } from '@angular/core';
import { IProduct } from './models/Iproduct';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private productsService: ProductsService){}

  getData(){
    return this.productsService.arrProduct;
  }

  ngOnInit(){
    this.productsService.getAll();
  }

}
