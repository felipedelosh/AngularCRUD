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

  getData(){
    return this.productsService.arrProduct;
  }

  showModal(action: string){

    let displayedText: string = "";

    if (action === 'ADD'){
      displayedText = "Agregar nuevo producto";
    }else{
      displayedText = "Modificar producto";
    }

    this.dialogService.open(ProductComponent, {
      header: displayedText,
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

  ngOnInit(){
    this.productsService.getAll();
  }

}
