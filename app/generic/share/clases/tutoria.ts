export class Tutoria {
    id: number;
    categoria: string;
    temas: string[];
    tipo: string;
    usuario: string;
 constructor( categoria: string, temas: string[],tipo: string,usuario: string){
  
  this.categoria=categoria;
  this.temas=temas;
  this.tipo=tipo;
  this.usuario=usuario;

 }
}
