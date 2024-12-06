import { Component } from '@angular/core';
import { IProduct } from './models/Iproduct';
import { ProductsService } from './services/products.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private productsService: ProductsService, private dialogService: DialogService){}

  get arrProduct(){
    return this.productsService.arrProduct;
  }

  showModal(){
    this.dialogService.open(ProductComponent, {
      header: "Agregar producto",
      height: '400px',
      width: '300px'
    });
  }

  viewINFO(product: IProduct){
    alert(product.description);
  }

  delete(product: IProduct):void{
    this.productsService.delete(product);
  }

  edit(product: IProduct):void{
    this.dialogService.open(ProductComponent, {
      header: "Modificar producto",
      data: product,
      height: '400px',
      width: '300px'
    });
  }

  ngOnInit(){
    this.productsService.getAll();
  }

}
