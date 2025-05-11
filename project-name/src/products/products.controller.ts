import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {

    }

    @Get()
    getProducts() {
 
        return  this.productService.getProducts();
    }

    @Post()
    addProducts(
        @Body('title') pTitle:string,
        @Body('description') pDescription:string,
        @Body('price') pPrice:number,

    ){
        const returnedId = this.productService.insertProduct(pTitle,pDescription,pPrice);
        return {id:returnedId};
    }
  

}
