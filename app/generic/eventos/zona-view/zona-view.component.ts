import { Component, OnInit, Input } from '@angular/core';
import { Zona } from '../../share/clases/zona';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Puesto } from '../../share/clases/puesto';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-zona-view',
  templateUrl: './zona-view.component.html',
  styleUrls: ['./zona-view.component.css']
})
export class ZonaViewComponent implements OnInit {

  @Input() zona: Zona;
  puestos: Puesto[];
  filas: number[];
  puestosF: Puesto[];
  
  //puestos: number[]=[1,3,4,5];
  //filas: number[]=[1];

  //-------------------------------------
  
  //-------------------------------------
  constructor(private service: ServicioService) { 
  
  }
  
  ngOnInit() {
  this.puestos=[];
  this.puestosF=[];
  this.filas=[];
  
  
  this.service.findZonaById(this.zona.idZona).subscribe(datos=>{
  this.zona = datos;
  this.puestos = this.zona.puestos;
  
  //  alert(this.puestos.length);

}, error => {alert("error")}
  ); 
  
  this.hacerFilas();
  
  }

  puestosXfila(j: number){
    this.puestosF=[];

    for(var i=0; i<this.puestos.length; i++){
      if(this.puestos[i].fila == j){
        this.puestosF.push(this.puestos[i]);
      }   
    }
  }

  hacerFilas(){
    alert("filas");
    for(var i=0; i<this.puestos.length; i++){
      if(this.noExisteFila(this.puestos[i].fila) ){
        this.filas.push(this.puestos[i].fila);
      }
        
    }
  }


  noExisteFila(j: number){
    for(var i=0; i<this.filas.length; i++){
        if(this.filas[i]==j)
          return false;
    }
    this.filas.sort();
    this.filas.reverse();
    alert(this.filas[2]);
    return true;
  }


}