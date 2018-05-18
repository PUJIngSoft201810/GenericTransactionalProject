import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';
import { google } from '@agm/core/services/google-maps-types';
import { Localizacion } from '../share/clases/localizacion';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {
  
  @Output() onUbicated = new EventEmitter<Localizacion>();

  lat: number = 4.624335;
  lng: number = -74.063644;
  latitud: number = 4.624335;
  longitud: number = -74.063644;
  zoom=5;
  mostrar=false;
  idSelected: number;
  direccion: string;
  buscador: string;
  
  ciudades = [
    {id:1, nombre: 'Bogota DC', lat: 4.624335,lng: -74.063644},
    {id:2, nombre: 'Medellin', lat: 6.27053,lng: -75.57211999999998},


  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  cambiar(){
    //alert(this.idSelected);
    this.zoom=12;
    this.latitud=this.ciudades[this.idSelected-1].lat;
    this.longitud=this.ciudades[this.idSelected-1].lng;
    
  }
  marcador(event){
    this.lat= event.coords.lat;
    this.lng= event.coords.lng;
    this.mostrar=true;
    let dir="https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+"+,"+this.lng+"+&key=AIzaSyDE701dGloOkBPfgry6atXiTNx9s5FHkH8";
    this.http.get(dir).subscribe(res=>{
      let d:string;
      d=(res["results"][0]["formatted_address"]);
     this.direccion=d.split(',')[0]
    }
    
    ,error=>alert('error'+error));
    let l:Localizacion=new Localizacion();

    l.ciudad=this.ciudades[this.idSelected-1].nombre;
    l.direccion=this.direccion;
    l.latitud=this.lat;
    l.longitud  =this.lng;
       

    this.onUbicated.emit(l);
  }

  buscar(){
    var map =(document.getElementById('mapa'));
    
      alert(map);
    let b=this.buscador+", "+this.ciudades[this.idSelected-1].nombre+", Colombia";

let dir="https://maps.googleapis.com/maps/api/geocode/json?address="+b+"+&key=AIzaSyDE701dGloOkBPfgry6atXiTNx9s5FHkH8";
this.http.get(dir).subscribe(res=>{


    this.zoom=14;
    this.lat=res["results"][0]["geometry"]["location"]["lat"];
    this.lng=res["results"][0]["geometry"]["location"]["lng"];
    
    this.latitud=this.lat;
    this.longitud=this.lng;
    
    this.mostrar=true;
    this.http.get(dir).subscribe(res=>{
      let d:string;
      d=(res["results"][0]["formatted_address"]);
     this.direccion=d.split(',')[0];


/**** */

 // this.PasameDireccion.emit("a");

  let l:Localizacion=new Localizacion();

    l.ciudad=this.ciudades[this.idSelected-1].nombre;
    l.direccion=this.direccion;
    l.latitud=this.lat;
    l.longitud  =this.lng;
       

    this.onUbicated.emit(l);

    }
    
    ,error=>alert('error'+error));
}

,error=>alert('error'+error))


  }


}
