import { Component, OnInit } from '@angular/core';
import { Tutoria } from '../../share/clases/tutoria';
import { TutoriaService } from '../../share/services/tutoria.service';

@Component({
  selector: 'app-tutoriaadd',
  templateUrl: './tutoriaadd.component.html',
  styleUrls: ['./tutoriaadd.component.css']
})
export class TutoriaaddComponent implements OnInit {
  tutoria: Tutoria;
  tema:string;
  constructor(private service: TutoriaService) { 
  }

  ngOnInit() {
    this.init();
  }
  init(){
    this.tutoria=new Tutoria(this.service.getNewId(),"",[],"","");
 
  }
  procesarTutoria(){
    this.service.addTutoria(this.tutoria);
    alert("agregando...");
    this.init();
    
  }
  addTema(){
    this.tutoria.temas.push(this.tema);
    this.tema="";  
  }
}
