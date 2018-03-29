import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutoriaService } from '../../share/services/tutoria.service';
import { Tutoria } from '../../share/clases/tutoria';

@Component({
  selector: 'app-tutoria-view',
  templateUrl: './tutoria-view.component.html',
  styleUrls: ['./tutoria-view.component.css']
})
export class TutoriaViewComponent implements OnInit {
 id:number;
 tutoria: Tutoria;
  constructor(private route: ActivatedRoute, private service: TutoriaService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']); // recuperar id
    this.tutoria=this.service.finById(this.id);
  }

}
