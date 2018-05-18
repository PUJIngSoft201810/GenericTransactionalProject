import { Component, OnInit } from '@angular/core';
import { Tutoria } from '../../share/clases/tutoria';
import { TutoriaService } from '../../share/services/tutoria.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

 tutorias:Tutoria[]=[];
  constructor(
    private service: TutoriaService
  ) { }

  ngOnInit() {
    
  this.listar();  
  }
  deleteTutoria(tutoria:Tutoria){
    alert("eliminar "+tutoria.id);

    this.service.deleteTutoria(tutoria.id)
    .subscribe(res =>{ 
      this.listar();}
      ,error=>{
        alert("error");
      });;
    ;
    
  }
  listar(){
    this.service.findAll().subscribe(datos => {
      this.tutorias = datos;
    },
    error => {     alert("error");
  });
  
  }
}
