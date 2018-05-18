import { Localizacion } from "./localizacion";

export  class Servicio {
  [x: string]: any;
    idServicio: number;    
    nombre: string;
    descripcion: string;
    imagen: string;
    categoria: string;
    localizacion: Localizacion;
    fecha_publicacion: Date;
    video: string;


    constructor(){
        //asignar fecha del sistema *****
    }  

}





    /*constructor(nombre: string,imagen: string, descripcion: string){
    
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagen=imagen;
        
    }*/