import { Alert } from "selenium-webdriver";
import { Time } from "@angular/common";

export class Evento {

    id: number=0;
    nombre: string[];
    categoria: string;
    imagen: string;
    descripcion:string[];
    importante: string[];
    usuario: string;
    lugar: string[];
    hora_inicio:string;
    hora_fin:string;
    fecha_inicio: string;
    fecha_fin: string;
    entrada: string;
    valor_entrada: string;
    tipo_pago: string;

    constructor(id: number, nombre: string[],categoria: string,
        descripcion: string[], importante: string[], usuario: string,
        lugar: string[],hora_inicio:string, hora_fin: string, fecha_inicio: string,
        fecha_fin: string, valor: string, tipo_pago: string
    ){
        this.id=id;
        this.nombre=nombre;
        this.categoria=categoria;
        this.imagen='';
        this.descripcion=descripcion;
        this.importante=importante;
        this.usuario=usuario;
        this.lugar=lugar;
        this.hora_inicio=hora_inicio;
        this.hora_fin=hora_fin;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.entrada='';
        this.valor_entrada=valor;
        this.tipo_pago=tipo_pago;
        }
  /*
    constructor(id: number,nom: string, categoria: string){

    this.id=id;
    this.nombre=nom;
    this.categoria=categoria;
    }
*/
/*
constructor(id: number,nombre: string, categoria: string, descripcion:string[], importante:string[],
    usuario: string, lugar: string[], horainicio: string, horafin: string,
    fechainicio: string,fechafin: string, valor_entrada: string, tipo_pago: tipo_pago){
alert('iiiiiiii');
    this.id=id;
    this.nombre=nombre;
    this.categoria=categoria;
    this.imagen='';
    this.descripcion=descripcion;
    this.importante=importante;
    this.usuario=usuario;
    this.lugar=lugar;
    this.hora_inicio=horainicio;
    this.hora_fin=horafin;
    this.fecha_inicio=fechainicio;
    this.fecha_fin=fechafin;
    this.valor_entrada=valor_entrada;
    this.tipo_pago=tipo_pago;

    }   
*/
}
