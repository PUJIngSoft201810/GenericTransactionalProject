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
   this.tutoria=new Tutoria("",[],"","");
 
  }
  procesarTutoria(){
    alert(this.tutoria.categoria);
    this.service.addTutoria(this.tutoria)
    .subscribe(res => {
      alert("Se ha guardado ");
      this.init();
    }
    ,error=>{
      alert("Error");    
    });;
      
     
  }
   
  addTema(){
    this.tutoria.temas.push(this.tema);
    this.tema="";  
  }
}
