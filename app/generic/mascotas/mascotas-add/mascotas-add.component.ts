import { Component, OnInit, Input } from '@angular/core';
import { Educacion } from '../../share/clases/educacion';
import { Servicio } from '../../share/clases/servicio';

@Component({
  selector: 'app-mascotas-add',
  templateUrl: './mascotas-add.component.html',
  styleUrls: ['./mascotas-add.component.css']
})
export class MascotasAddComponent implements OnInit {

  @Input() servicio: Servicio;
  educacion: Educacion;
  
  constructor() {

   }

  ngOnInit() {
    this.educacion.nombre=this.servicio.nombre;
    this.educacion.descripcion=this.servicio.descripcion;
    this.educacion.categoria=this.servicio.categoria;
  }

  onUbicated(event){
    this.educacion.localizacion=event;
  }
}
