import { Component, OnInit } from '@angular/core';

import { Servicio } from '../share/clases/servicio';
@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
  
})
export class PublicarComponent implements OnInit {

  servicio: Servicio;
  constructor() { 

  }

  showMascotas=false;  
  showEvento=false;  
  showEducacion=false;  

  ngOnInit() {
    this.servicio= new Servicio();
  }


  onUbicated(event){
    this.servicio.localizacion=event;
  }
  procesar(){
      if(this.servicio.categoria=="educacion") this.showEducacion=true;
      if(this.servicio.categoria=="evento") this.showEvento=true;
      if(this.servicio.categoria=="mascotas") this.showMascotas=true;
  }
  openCity(evt, cityName) {
    
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

}
