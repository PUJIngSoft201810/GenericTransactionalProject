import { Directive, ElementRef, HostBinding, HostListener, Input, Output , EventEmitter} from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Zona } from '../../share/clases/zona';

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective {
  
  @Input() zona: Zona;
  @Output() onZona = new EventEmitter<Zona>();
 // positions: Position[]=[];
  
  position: Position = {x: 0,y: 0};
  //position: Position = {x: this.zona.posX,y: this.zona.posY};

  ngOnInit() {
   //this.position.x=this.zona.posX;
   //this.position.y=this.zona.posY;
    /*this.positions.push(new Position ());
    this.positions[0].x=547;
    this.positions[0].y=0;

    this.position=this.positions[0];
    */
  }

  
  @HostBinding('style.transform') get transform(): SafeStyle {
    
    return this.sanitizer.bypassSecurityTrustStyle(
      
      //`translateX(${this.position.x}px) translateY(${this.position.y}px)`
      `translateX(${this.zona.posX}px) translateY(${this.zona.posY}px)`
    );
  }


  @HostBinding('class.movable') movable = true;

  
  private startPosition: Position;

  @Input('appMovableReset') reset = false;

  constructor(private sanitizer: DomSanitizer, public element: ElementRef) {
    super();
  }

  @HostListener('dragStart', ['$event'])
  onDragStart(event: PointerEvent) {
    //this.positions.push({x: 0,y: 0});
    //this.position=this.positions[0];
    this.startPosition = {
      x: event.clientX - this.zona.posX,
      y: event.clientY - this.zona.posY
      
    }
    
  }

  @HostListener('dragMove', ['$event'])
  onDragMove(event: PointerEvent) {
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;
    this.zona.posX=this.position.x;
    this.zona.posY=this.position.y;
 
   
  }

  @HostListener('dragEnd', ['$event'])
  onDragEnd(event: PointerEvent) {
    alert(this.zona.posX);
    if (this.reset) {
      //this.position = {x: 0, y: 0};
    }
    
    

    this.onZona.emit(this.zona);
   // alert(((event.clientY) - (this.position.y)) +" - "+ (event.clientY));
  }
}
