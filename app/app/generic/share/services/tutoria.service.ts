import { Injectable } from '@angular/core';
import {Tutoria} from '../clases/tutoria';
@Injectable()
export class TutoriaService {
  tutorias: Tutoria[]=[];
  constructor() { 
    this.tutorias.push(new Tutoria(1, 'ADO' , ['UML', 'Patrones de diseño'],'Presencial','Mariela'));
    this.tutorias.push(new Tutoria(2, 'POO' , ['Interfaces', 'UML'],'Virtual','Guillermo'));
  }

  finAll(){
    return this.tutorias;
  }
  finById(id:number){
    return this.tutorias[id-1];
  }
  
  addTutoria(tutoria: Tutoria){
    this.tutorias.push(tutoria); 
  }
  editTutoria(tutoria: Tutoria){
    this.tutorias[tutoria.id-1]=tutoria; 
  }
  deleteTutoria(id: number){
     
  }
  getNewId(){
    return this.tutorias.length+1;
  }

}
