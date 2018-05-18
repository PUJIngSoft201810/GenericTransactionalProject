import { Component, OnInit } from '@angular/core';
import { Tutoria } from '../../share/clases/tutoria';
import { ServicioService } from '../../share/services/servicio.service';
//import { TutoriaService } from '../../share/services/tutoria.service';

@Component({
  selector: 'app-tutoriaadd',
  templateUrl: './tutoriaadd.component.html',
  styleUrls: ['./tutoriaadd.component.css']
})
export class TutoriaaddComponent implements OnInit {
  tutoria: Tutoria;
  tema:string;
  constructor(private service: ServicioService) { 
  }

  ngOnInit() {
    //this.init();
  }
  /*
  init(){
    this.tutoria=new Tutoria(this.service.getNewId(),"",[],"","");
 
  }
  
  addTema(){
    this.tutoria.temas.push(this.tema);
    this.tema="";  
  }
  */
 procesarTutoria(){
  /*this.service.addTutoria(this.tutoria);
  alert("agregando...");
  this.init();*/

}    
}
