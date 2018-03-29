import { Component, OnInit } from '@angular/core';
import { Tutoria } from '../../share/clases/tutoria';
import { TutoriaService } from '../../share/services/tutoria.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

 tutorias:Tutoria[]=[];
  constructor(
    private service: TutoriaService
  ) { }

  ngOnInit() {
    this.tutorias=this.service.finAll();
  
  }

}
