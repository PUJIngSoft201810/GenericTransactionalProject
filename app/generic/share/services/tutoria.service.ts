import { Injectable } from '@angular/core';
import {Tutoria} from '../clases/tutoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TutoriaService {
  tutorias: Tutoria[]=[];
  constructor(
    private http: HttpClient
  ) { 
  }

  findAll(): Observable<Tutoria[]> {
    return this.http.get<Tutoria[]>('http://localhost:8080/educacion');
  }
  finById(id:number){
  }
  
  addTutoria(tutoria: Tutoria){
    return this.http.post
    ('http://localhost:8080/educacion/add',tutoria,{ 
      headers: {
        'Content-Type': 'application/json'
    },
      withCredentials: true}
    , );
    
  }
  editTutoria(tutoria: Tutoria){
  }
  deleteTutoria(id: number){
    return  this.http.get('http://localhost:8080/educacion/delete/'+id,{withCredentials: true});
  }
  getNewId(){
    return this.tutorias.length+1;
  }

}
