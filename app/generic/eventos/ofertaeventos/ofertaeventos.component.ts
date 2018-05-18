import { Component, OnInit } from '@angular/core';
import { Evento } from '../../share/clases/evento';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-ofertaeventos',
  templateUrl: './ofertaeventos.component.html',
  styleUrls: ['./ofertaeventos.component.css']
})
export class OfertaeventosComponent implements OnInit {

  eventos: Evento[]=[];
  constructor(private service: ServicioService) {
    //alert(this.eventos.length);
  } 

  ngOnInit() {

    this.service.findEventos().subscribe(datos=>{
        this.eventos = datos;
    }, error => {alert("error")}
  );
   
 
  }

}
