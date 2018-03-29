export class Tutoria {
    id: number;
    categoria: string;
    temas: string[];
    tipo: string;
    usuario: string;
 constructor(id: number, categoria: string, temas: string[],tipo: string,usuario: string){
  this.id=id;
  this.categoria=categoria;
  this.temas=temas;
  this.tipo=tipo;
  this.usuario=usuario;

 }
}
