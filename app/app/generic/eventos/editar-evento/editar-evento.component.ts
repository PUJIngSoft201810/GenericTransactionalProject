import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../share/services/evento.service';
import { Evento } from '../../share/clases/evento';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  eventos: Evento[]=[];

  constructor(private service: EventoService) { }

  ngOnInit() {
    this.eventos=this.service.findAll();
  }

}
