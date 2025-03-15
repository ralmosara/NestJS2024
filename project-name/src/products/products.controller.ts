import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private ProductService: ProductsService) {

    }


    @Get()
    getProducts(): any {
        return  {products:'All Products'};

    }

    @Post()
    addProducts(
        @Body('title') pTitle:string,
        @Body('description') pDescription:string,
        @Body('price') pPrice:number,

    ){
        const returnedId = this.ProductService.insertProduct(pTitle,pDescription,pPrice);

        return {id:returnedId};
    }
  

}
