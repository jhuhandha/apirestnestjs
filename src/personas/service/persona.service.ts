import { Injectable } from "@nestjs/common";
import { PersonaModel } from '../model/persona.model';

@Injectable()
export class PersonaService {

    private personas : Array<PersonaModel> = [];

    guardar(nombre: string, edad: number, correo: string) : string {
        let id = (Math.random() * 40000 + 1).toString();
        let per = new PersonaModel(id, nombre, edad, correo);
        this.personas.push(per);
        return id;
    }

    listar() : Array<PersonaModel>{
        return [...this.personas];
    }

    obtener(id : string){
        let datos = this.buscar(id);
        if(datos==null){
            return null;
        }
        return {...datos.per};
    }

    buscar(id : string) {
        let index = this.personas.findIndex(e=> e.id === id);
        if(index == -1){
            return null;
        }
        let per = this.personas[index];
        return {per, index};
    }

    modificar(id: string, nombre: string, edad: number, correo: string){
        let datos = this.buscar(id);
        if(datos == null){
            return null;
        }
        let persona = this.personas[datos.index];
        if(nombre != null){
            persona.nombre = nombre;
        }
        if(edad != null){
            persona.edad = edad;
        }
        if(correo != null){
            persona.correo = correo;
        }
        this.personas[datos.index] = persona;
        return true;
    }
}