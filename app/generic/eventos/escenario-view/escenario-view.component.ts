import { Component, OnInit } from '@angular/core';
import { Zona } from '../../share/clases/zona';
import { Escenario } from '../../share/clases/escenario';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-escenario-view',
  templateUrl: './escenario-view.component.html',
  styleUrls: ['./escenario-view.component.css']
})
export class EscenarioViewComponent implements OnInit {

  escenario: Escenario;
  zona: Zona;
  zonas: Zona[];

  //@Output() onLocalizaciones = new EventEmitter<Localidad[]>();
  
  zonaV=false;
  
  constructor(private service: ServicioService) {
    
   }

  ngOnInit() {
    
    this.zonas=[];

    this.zona=new Zona();
    this.zona.posX=0;
    this.zona.posY=0;

      this.service.findEscenarioById(1).subscribe(datos=>{
      this.escenario = datos;
      this.zonas= this.escenario.zonas;


  }, error => {alert("error")}
    ); 


  }

  
  sumar(a:number,b: number):number{
    return parseInt(a+"")+parseInt(b+"");
  }


  zonaView(z: Zona){
    this.zona=z;
    this.zonaV=true;

  //  this.draw=true;
  //  this.onLocalizaciones.emit(this.zonas);
  //  this.onEscenario.emit(this.escenario);
  }

}
