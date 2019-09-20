import { Controller, Get, HttpException, Param, HttpStatus, Post, Body, Patch } from '@nestjs/common';
import { ProductosService } from './service/productos.service';
import { ProductoCrearDto } from './dto/producto-crear.dto';

@Controller("producto")
export class ProductosController {

    constructor(private _productoService : ProductosService){}

    @Post()
    async guardar(@Body() productoCrearDto : ProductoCrearDto){
        const resultado = await this._productoService.guardar(productoCrearDto);
        return {ok:true, resultado}
    }

    @Get()
    async listar(){
        return await this._productoService.listar();
    }

    @Get(":id")
    async obtener(@Param("id") id :  string){
        const resultado = await this._productoService.obtener(id);
        if(resultado == null){
            throw new HttpException("Producto no encontrado", HttpStatus.NOT_FOUND);
        }
        return resultado;
    }

    @Patch(":id")
    async modificar(@Param("id") id : string, @Body() productoCrearDto : ProductoCrearDto){
        const resultado = await this._productoService.modificar(id, productoCrearDto);
        if(resultado == null){
            throw new HttpException("Producto no encontrado", HttpStatus.NOT_FOUND);
        }
        return resultado;
    }

}