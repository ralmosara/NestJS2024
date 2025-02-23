import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getProducts(): any {
        return  {products:'All Products'};
    }

  

}
