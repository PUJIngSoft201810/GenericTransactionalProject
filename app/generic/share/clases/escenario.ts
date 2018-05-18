import { Localidad } from "./localidad";
import { Zona } from "./zona";

export class Escenario {
    idEscenario: number;
    nombre:string;
    zonas: Zona[];

    constructor(){
        this.zonas=[];
    }  
    
}
