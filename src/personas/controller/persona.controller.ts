import { Controller, Post, Body, Get, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PersonaService } from '../service/persona.service';
import { PersonaCrearDto } from '../dto/persona-crear.dto';
import { PersonaModificarDto } from '../dto/persona-modificar.dto';

@Controller('persona')
export class PersonaController {
    constructor(private _personasService: PersonaService) { }

    @Post()
    guardar(@Body() personaCrearDto: PersonaCrearDto) {
        let id = this._personasService.guardar(
            personaCrearDto.nombre,
            personaCrearDto.edad,
            personaCrearDto.correo
        );
        return { ok: true, id };
    }

    @Get()
    listar() {
        return this._personasService.listar();
    }

    @Get(":id")
    obtener(@Param("id") id : string){
        let respuesta = this._personasService.obtener(id);
        if (respuesta == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Persona no encontrada'
            }, 404);
        }
        return respuesta;
    }

    @Patch(":id")
    modificar(
        @Param("id") id: string,
        @Body() personaModificarDto: PersonaModificarDto
    ) {
        let respuesta = this._personasService.modificar(
            id,
            personaModificarDto.nombre,
            personaModificarDto.edad,
            personaModificarDto.correo
        );
        if (respuesta == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Persona no encontrada'
            }, 404);
        }

        return { ok: true };
    }
}
