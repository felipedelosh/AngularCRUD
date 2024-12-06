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

  private isEditableProduct: boolean = false;

  constructor(
    private productsService: ProductsService,
    private dynamicDialogConfig: DynamicDialogConfig,
    private dynamicDialogRef: DynamicDialogRef,
  ){

  }

  ngOnInit(){
    const data = this.dynamicDialogConfig.data!;

    if(data){
      const product : IProduct = data;
      this.productsService.form = this.productsService.edit(product);
      this.isEditableProduct = true;
    }
  }

  getForm(){
    return this.productsService.form;
  }

  save(){
    console.log(this.productsService.form.value);

    const form: FormGroup = this.productsService.form;
    if (form.valid){
      const product: IProduct = this.productsService.form.value as IProduct;

      if(this.isEditableProduct){
        this.productsService.editProd(product);
      }else{
        this.productsService.create(product);
      }

    }else{
      alert("Error al guardar el producto.");
    }

    this.closeModalWindow();
  }

  closeModalWindow(){
    this.dynamicDialogRef.close();
  }
  
}
