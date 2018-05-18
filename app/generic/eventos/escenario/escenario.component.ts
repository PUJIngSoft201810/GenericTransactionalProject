import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Escenario } from '../../share/clases/escenario';
import { Zona } from '../../share/clases/zona';
import { Localidad } from '../../share/clases/localidad';
import { ServicioService } from '../../share/services/servicio.service';
import { Puesto } from '../../share/clases/puesto';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.css']
})
export class EscenarioComponent implements OnInit {
  escenario: Escenario;
  zona: Zona;
  zonas: Zona[];
  puesto: Puesto;
  puestos: Puesto[];

  //@Output() onLocalizaciones = new EventEmitter<Localidad[]>();
  @Output() onEscenario = new EventEmitter<Escenario>();
  draw=false;
  
  constructor(private service: ServicioService) {
    
   }

  ngOnInit() {
    
    this.zonas=[];
    this.puestos=[];

    this.escenario=new Escenario();
    
    this.zona=new Zona();
    this.zona.posX=0;
    this.zona.posY=0;

    this.puesto=new Puesto();
    this.puesto.codigo="";
    this.puesto.columna=null;
    this.puesto.fila=null;
    this.puesto.disponible=true;
/*
      this.service.findEscenarioById(1).subscribe(datos=>{
      this.escenario = datos;
      this.zonas= this.escenario.zonas;

      alert(this.escenario.nombre);

  }, error => {alert("error")}
    ); 
*/

  }

  addZona(){
    this.zona.puestos=this.puestos;    
    this.zonas.push(this.zona);
    this.zona=new Zona();
    this.zona.posX=0;
    this.zona.posY=0;
    this.puestos=[];
  }

  addPuesto(){
        
    this.puestos.push(this.puesto);
    this.puesto=new Puesto();
    this.puesto.codigo="";
    this.puesto.columna=null;
    this.puesto.fila=null;
    this.puesto.disponible=true;
  }

  sumar(a:number,b: number):number{
    return parseInt(a+"")+parseInt(b+"");
  }

  onZonas(event){
    this.zonas=event;
    this.onEscenario.emit(this.escenario);
    this.escenario.zonas=event;

    this.service.addEscenario(this.escenario)
    .subscribe(res => {
      alert("Se ha guardado ");
      this.escenario=new Escenario();
    }
    ,error=>{
      alert("Error");    
    });
  }

  procesar(){

    this.draw=true;
  //  this.onLocalizaciones.emit(this.zonas);
  //  this.onEscenario.emit(this.escenario);
  }
}
