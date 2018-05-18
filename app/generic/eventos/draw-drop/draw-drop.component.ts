import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Zona } from '../../share/clases/zona';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-draw-drop',
  templateUrl: './draw-drop.component.html',
  styleUrls: ['./draw-drop.component.css']
})
export class DrawDropComponent implements OnInit {

  zona: Zona;
  @Input() zonas: Zona[];
  @Output() onZonas = new EventEmitter<Zona[]>();

  ngOnInit() {
    
  /*  this.zona=new Zona();
    this.zona.nombre="prueba";
    this.zona.posX=32;
    this.zona.posY=350;  
    this.zonas.push(this.zona);
    this.zona=new Zona();
    this.zona.nombre="prueba2";
    this.zona.posX=250;
    this.zona.posY=50;  
    this.zonas.push(this.zona);*/
  }
  
  trappedBoxes = ['Trapped 1', ('Trapped 2'),('eqe'),('e44qe')];

  guardar(): void {
    this.onZonas.emit(this.zonas);
  }



  onDragStart() {
    console.log('got drag start');
    //alert('got drag start');
  }

  onDragMove(event: PointerEvent) {
    console.log(`got drag move ${Math.round(event.clientX)} ${Math.round(event.clientY)}`);
    
  }

  onDragEnd(s: string ){
    console.log('got drag end');
    //alert(s);
  }
  onZona(event){
   
    
    for (var i = 0; i < this.zonas.length ; i ++){
      if(this.zonas[i].nombre == event.nombre){
        this.zonas[i]=event;
       // alert("x"+this.zonas[i].posX +"y"+ this.zonas[i].posY );
        
        break;
      }
    }
    
  }


}

