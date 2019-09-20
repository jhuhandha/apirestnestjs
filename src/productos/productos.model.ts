import * as mongoose from 'mongoose';

export const ProductoSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    descripcion : String,
    cantidad : {
        type: Number,
        default: 0
    },
    precio : {
        type: Number,
        required : true
    },
    colores: [{
        nombre : String,
        hexadecimal : String
    }]
});

export interface IProducto extends mongoose.Document {
    nombre : string,
    descripcion?: string,
    cantidad: number,
    precio: number,
    colores: []
}