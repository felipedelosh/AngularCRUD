import { Injectable } from '@angular/core';
import { IProduct } from '../models/Iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductRepository } from '../class/product-repository';

@Injectable({
    providedIn: 'root',
})
export class ProductsService extends ProductRepository {
    private readonly urlAPI: string = environment.urlAPI;
    public arrProduct: Array<IProduct> = [];
    public form: FormGroup = this.new();

    constructor(private httpClient: HttpClient) {
        super();
    }

    getAll(): Array<IProduct> {
        this.httpClient.get(this.urlAPI).subscribe((data: any) => {
            this.arrProduct = data;
        });

        return [];
    }

    create(product: IProduct): void {
        this.httpClient.post(this.urlAPI, product).subscribe(
            (data) => {
                alert("SAVE IN API");
                console.log(data);
            }
        );
        alert("Producto guardado con exito.");
    }

    editProd(product: IProduct){
        const editURL = `${this.urlAPI}/${product.id}`;

        this.httpClient.put(editURL, product).subscribe((data: any) => {
            this.arrProduct = data;
        });

        alert(`Edit product: ${product.id}`);
    }

    delete(product: IProduct): void {
        const delURL = `${this.urlAPI}/${product.id}`;

        this.httpClient.delete(delURL).subscribe((data: any) => {
            this.arrProduct = data;
        });

        alert(`Delete product: ${product.id}`);
    }
}
