import { Component, OnInit } from '@angular/core';
import { Evento } from '../../share/clases/evento';
import { Services } from '@angular/core/src/view';
import { EventoService } from '../../share/services/evento.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  evento: Evento;
  constructor(private service: EventoService) {
    
   }

  ngOnInit() {
    this.evento= new Evento(this.service.getNewId(),[],'',[],[],'',[],'','','','','','');
  }

  procesarEvento(){
    this.service.addEvento(this.evento);
    alert("Evento Publicado..!!");
    //alert(this.evento.entrada);
  }
}
