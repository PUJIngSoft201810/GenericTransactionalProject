import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { EventoService } from '../../share/services/evento.service';
import { Evento } from '../../share/clases/evento';
import { ServicioService } from '../../share/services/servicio.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  id: number;
  evento: Evento;
  constructor(private route: ActivatedRoute, private service: ServicioService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']); // recuperar id
    //this.evento = this.service.findById(this.id);
    //alert(this.evento.tipo_pago);
  }

}
