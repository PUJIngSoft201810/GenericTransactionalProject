
import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../share/clases/evento';
import { Servicio } from '../../share/clases/servicio';
import { ServicioService } from '../../share/services/servicio.service';
import { Empresa } from '../../share/clases/empresa';

@Component({
  selector: 'app-eventos-add',
  templateUrl: './eventos-add.component.html',
  styleUrls: ['./eventos-add.component.css']
})
export class EventosAddComponent implements OnInit {

  @Input() servicio: Servicio;

  evento: Evento;
  artista: string;  
  empresa: Empresa;

  constructor(private service: ServicioService) { }

  showEscenario=false;

  ngOnInit() {
    

    this.evento=new Evento();
    this.empresa=new Empresa();
    this.evento.empresa=this.empresa;
    this.evento.fecha_publicacion=new Date();
    this.evento.estado="Activo";
    this.evento.nombre=this.servicio.nombre;
    this.evento.descripcion=this.servicio.descripcion;
    this.evento.categoria=this.servicio.categoria;
    
  }

  siguiente(){
    this.showEscenario=true;
  }
  procesar(
    
  ){
    
    //alert(this.evento.localidad[0].nombre);
    
    this.service.addEvento(this.evento)
    .subscribe(res => {
      alert("Se ha guardado ");
      this.evento=new Evento();
    }
    ,error=>{
      alert("Error");    
    });
      
     
  }
  
 
  addArtista(){
    
    this.evento.artistas.push(this.artista);
    this.artista="";  
    
  } 
  onUbicated(event){
    this.evento.localizacion=event;
  }

  onEscenario(event){
    this.evento.escenario=event;
    alert(this.evento.escenario.nombre+ "-->llego el escenario");
  }
 
  onLocalizaciones(event){
    this.evento.localidad=event;
    alert("llego");
    alert(this.evento.localidad[0].nombre);

  /*
    this.service.addEvento(this.evento)
    .subscribe(res => {
      alert("Se ha guardado ");
      this.evento=new Evento();
    }
    ,error=>{
      alert("Error");    
    });
    
    */
    
  }
  
}
