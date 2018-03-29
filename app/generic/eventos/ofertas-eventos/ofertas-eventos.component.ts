import { Component, OnInit } from '@angular/core';
import { Evento } from '../../share/clases/evento';
import { EventoService } from '../../share/services/evento.service';

@Component({
  selector: 'app-ofertas-eventos',
  templateUrl: './ofertas-eventos.component.html',
  styleUrls: ['./ofertas-eventos.component.css']
})
export class OfertasEventosComponent implements OnInit {
  eventos: Evento[]=[];
  constructor(private service: EventoService) {
    //alert(this.eventos.length);
  }

  ngOnInit() {

    this.eventos=this.service.findAll();
    
  }

}
