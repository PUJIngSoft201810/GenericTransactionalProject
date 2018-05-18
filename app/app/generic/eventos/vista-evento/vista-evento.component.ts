import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../../share/services/evento.service';
import { Evento } from '../../share/clases/evento';

@Component({
  selector: 'app-vista-evento',
  templateUrl: './vista-evento.component.html',
  styleUrls: ['./vista-evento.component.css']
})
export class VistaEventoComponent implements OnInit {

  id: number;
  evento: Evento;
  constructor(private route: ActivatedRoute, private service: EventoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']); // recuperar id
    this.evento = this.service.findById(this.id);
  }

}
