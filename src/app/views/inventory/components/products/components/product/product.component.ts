import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/Iproduct';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(
    private productsService: ProductsService,
    private dynamicDialogConfig: DynamicDialogConfig,
    private dynamicDialogRef: DynamicDialogRef,
  ){

  }

  getForm(){
    return this.productsService.form;
  }

  save(){
    console.log(this.productsService.form.value);

    const form: FormGroup = this.productsService.form;
    if (form.valid){
      const product: IProduct = this.productsService.form.value as IProduct;
      this.productsService.create(product);
      alert("Producto guardado con exito.");
    }else{
      alert("Error al guardar el producto.");
    }

    this.closeModalWindow();
  }

  closeModalWindow(){
    this.dynamicDialogRef.close();
  }
  
}
