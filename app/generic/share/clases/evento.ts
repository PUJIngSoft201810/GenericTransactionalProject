import { Alert } from "selenium-webdriver";
import { Time } from "@angular/common";
import { HttpClient } from "selenium-webdriver/http";
import { Servicio } from "./servicio";
import { Localizacion } from "./localizacion";
import { Escenario } from "./escenario";
import { Localidad } from "./localidad";
import { Empresa } from "./empresa";

export class Evento extends Servicio{
    
    fechaEvento: Date;
    horaApertura: string;
    horaInicio: string;
    horaFin: string;
    artistas: string[]=[];
    restricciones: string;
    categoriaEvento: string;
    escenario: Escenario;
    localidad: Localidad[]=[];
    empresa: Empresa;
    edadMinima: number;
    estado: string;
    
    
    constructor(
    )
    {
        super();
        
    }
  
}
