import { Component, OnInit } from '@angular/core';
import { Evento } from '../share/clases/evento';
import { EventoService } from '../share/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Evento[]=  [];

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.eventos = this.service.findAll();
  }

}
