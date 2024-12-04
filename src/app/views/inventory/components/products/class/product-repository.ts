import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { IProduct } from "../models/Iproduct";

export class ProductRepository {

    constructor(){}


    new(): FormGroup{
        return new FormBuilder().group(
            {
                title: new FormControl(),
                description: new FormControl(),
                price: new FormControl()
            }
        );
    }


    edit(product: IProduct){
        return new FormBuilder().group(
            {
                title: new FormControl(product.title),
                description: new FormControl(product.description),
                price: new FormControl(product.price)
            }
        );
    }

}
