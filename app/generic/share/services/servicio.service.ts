import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../clases/servicio';
import { Observable } from 'rxjs/Observable';
import { Evento } from '../clases/evento';
import { Educacion } from '../clases/educacion';
import { Escenario } from '../clases/escenario';
import { Zona } from '../clases/zona';

@Injectable()
export class ServicioService {

  constructor(private http: HttpClient) { }

  //----inicio eventos 

  findEventos(): Observable<Evento[]>{
    //alert(this.eventos.length);
    return this.http.get<Evento[]> ('http://localhost:8080/evento',
  {withCredentials: true});
  }

  addEvento(evento: Evento){
    return this.http.post
    ('http://localhost:8080/evento/add',evento,{
      headers: {
        'Content-Type':'application/json'
      },withCredentials: true},
    );
  }

  findEventoById (id: number): Observable <Evento>{
    //alert(this.eventos.length);
    return this.http.get<Evento>('http://localhost:8080/evento/'+id,
  {withCredentials: true});
  }

  findEscenarios(): Observable<Escenario[]>{
    //alert(this.eventos.length);
    return this.http.get<Escenario[]> ('http://localhost:8080/escenario',
  {withCredentials: true});
  }

  findEscenarioById (id: number): Observable <Escenario>{

    return this.http.get<Escenario>('http://localhost:8080/escenario/'+id,
  {withCredentials: true});
  }

  addEscenario(escenario: Escenario){
    //alert(escenario.nombre);
    return this.http.post
    ('http://localhost:8080/escenario/add',escenario,{
      headers: {
        'Content-Type':'application/json'
      },withCredentials: true},
    );
  }


  findZonaById (id: number): Observable <Zona>{
    //alert(this.eventos.length);
    return this.http.get<Zona>('http://localhost:8080/zona/'+id,
  {withCredentials: true});
  }
//----fin eventos

//----inicio Educacion

  findEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>('http://localhost:8080/educacion');
  }

  addEducacion(e: Educacion){
    
    return this.http.post
    ('http://localhost:8080/educacion/add',e,{ 
      headers: {
        'Content-Type': 'application/json'
    },
      withCredentials: true}
    , );
    
  }
  editEducacion(e: Educacion){
  }
  deleteEducacion(id: number){
    return  this.http.get('http://localhost:8080/educacion/delete/'+id,{withCredentials: true});
  }
  //----fin Educacion
}