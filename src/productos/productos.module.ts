import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { ProductosController } from './productos.controller'
import { ProductosService } from './service/productos.service';
import { ProductoSchema } from './productos.model'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }])
    ],
    controllers: [ProductosController],
    providers: [ProductosService]
})
export class ProductosModule {}