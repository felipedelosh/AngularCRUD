import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productsService: ProductsService){

  }

  getForm(){
    return this.productsService.form;
  }

  otro(){
    alert("Hola mundo");
  }
  
}
