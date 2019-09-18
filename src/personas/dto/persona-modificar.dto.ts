import {IsNotEmpty, IsInt, Min, IsEmail} from 'class-validator';

export class PersonaModificarDto {

    // @IsNotEmpty({message: "El nombre es requerido"})
    readonly nombre : string;

    // @IsInt({message: "La edad debe ser numero"})
    // @Min(1, {message: "La edad debe ser mayor a 1"})
    readonly edad : number;

    // @IsEmail()
    readonly correo : string;
}