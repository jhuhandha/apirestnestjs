import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProducto } from '../productos.model';
import { ProductoCrearDto } from './../dto/producto-crear.dto';

@Injectable()
export class ProductosService {

    constructor(@InjectModel("Producto")
    private readonly productoModel: Model<IProducto>) { }

    async guardar(productoCrearDto: ProductoCrearDto) : Promise<IProducto> {
        const crear = new this.productoModel(productoCrearDto);
        return await crear.save();
    }

    async listar() : Promise<IProducto[]> {
        try{
            return await this.productoModel.find().exec();
        }catch(Exception){
            return null;
        }
    }

    async obtener(id:string) : Promise<IProducto> {
        try{
            return await this.productoModel.findById(id).exec();
        }catch(Exception){
            return null;
        }
    }

    async modificar(id: string, productoCrearDto : ProductoCrearDto) : Promise<IProducto> {
        try{
            return await this.productoModel.findByIdAndUpdate(id, productoCrearDto, {new:true}).exec();
        }catch(Exception){
            return null;
        }
    }

}