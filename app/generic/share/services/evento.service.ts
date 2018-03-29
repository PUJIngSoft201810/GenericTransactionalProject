import { Injectable } from '@angular/core';
import { Evento } from '../clases/evento';

@Injectable()
export class EventoService {
  
  eventos: Evento[]=[];
  
  
  constructor() { 
    //this.eventos.push(new Evento(this.getNewId(),'Partido de Futbol','Deportes','Descripcion','','Michael','Pauna','1:51 am','hoy','$20.000',tipo_pago.Comisión));
    //this.eventos.push(new Evento(this.getNewId(),'Bad Bunny','Concierto',"","Importante",'Thalia','Pauna','1:51 am','28/03/2018','---',tipo_pago.Comisión));
    //this.eventos.push(new Evento(1,'Michael','deportes','','','','','','','',tipo_pago.Mensualidad));
    this.eventos.push(new Evento(this.getNewId(),['Partido'],
    'Deportes',['Arsenal vs Barcelona'],['¿Quien ganará?'],
    'Michael',['Pauna'],'1:00','2:00','hoy','mañana','20000','Mensualidad'
  ));
  this.eventos.push(new Evento(this.getNewId(),['Pelicula'],
  'Cultura',['Age of Ice'],['frio'],
  'Thalia',['Bogota'],'','','','','','Mensualidad'
));
 // this.eventos.push(new Evento(10,['Partido'],'deportes'));
    
    
  }

  getNewId(){
    return this.eventos.length+1;
  }

  findAll(){
    //alert(this.eventos.length);
    return this.eventos;
  }
  findById(id: number){
    return this.eventos[id-1];
  }

  addEvento(evento: Evento){
    this.eventos.push(evento);
  }

  editEvento(evento: Evento){
    this.eventos[evento.id-1]=evento
  }

  deleteEvento(id: number){

  }

}
