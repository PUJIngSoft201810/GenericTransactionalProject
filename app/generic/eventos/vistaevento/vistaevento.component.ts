import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { EventoService } from '../../share/services/evento.service';
import { Evento } from '../../share/clases/evento';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-vistaevento',
  templateUrl: './vistaevento.component.html',
  styleUrls: ['./vistaevento.component.css']
})
export class VistaEventoComponent implements OnInit {

  id: number;
  evento: Evento;
  constructor(private route: ActivatedRoute, private service: ServicioService) { }

  ngOnInit() {
    //this.id=6;
    this.route.params.subscribe(params => this.id = +params['id']); // recuperar id
    this.service.findEventoById(this.id).subscribe(datos=>{
      this.evento = datos;
      
  }, error => {alert("error")}
);


  }

  sumar(a:number,b: number):number{
    return parseInt(a+"")+parseInt(b+"");
  }

}
