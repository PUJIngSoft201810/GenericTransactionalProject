import { Component, OnInit, Input } from '@angular/core';
import { Servicio } from '../../share/clases/servicio';
import { Educacion } from '../../share/clases/educacion';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {

  @Input() servicio: Servicio;
  educacion: Educacion;
  tema:string;
  constructor(private service: ServicioService) { }


  ngOnInit() {
    this.educacion=new Educacion();
    this.educacion.temas=[];

    this.educacion.nombre=this.servicio.nombre;
    this.educacion.descripcion=this.servicio.descripcion;
    this.educacion.categoria=this.servicio.categoria;
  
  }

  procesarTutoria(){
    
    
    
    this.service.addEducacion(this.educacion)
    .subscribe(res => {
      alert("Se ha guardado ");
      this.educacion=new Educacion();
    }
    ,error=>{
      alert("Error");    
    });
      
     
  }
   
  addTema(){
    this.educacion.temas.push(this.tema);
    this.tema="";  
  }
  onUbicated(event){
    this.educacion.localizacion=event;
  }
}
