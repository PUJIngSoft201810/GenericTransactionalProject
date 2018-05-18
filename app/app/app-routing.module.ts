import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './generic/home/home.component';
import { OfertasComponent } from './generic/educacion/ofertas/ofertas.component';
import { TutoriaaddComponent } from './generic/educacion/tutoriaadd/tutoriaadd.component';
import { TutoriaViewComponent } from './generic/educacion/tutoria-view/tutoria-view.component';
import { EventosComponent } from './generic/eventos/eventos.component';
import { AddEventoComponent } from './generic/eventos/add-evento/add-evento.component';
import { VistaEventoComponent } from './generic/eventos/vista-evento/vista-evento.component';
import { EditarEventoComponent } from './generic/eventos/editar-evento/editar-evento.component';
import { EditorComponent } from './generic/eventos/editor/editor.component';
//import { AddEventoComponent } from './generic/eventos/add-evento/add-evento.component';


/**agregar las rutas */   
const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'educacion/ofertas', component: OfertasComponent},
 {path: 'educacion/tutoria-add', component: TutoriaaddComponent},
 {path: 'educacion/tutoria-view/:id', component: TutoriaViewComponent},
 {path: 'eventos', component: EventosComponent},
 {path: 'eventos/add-evento', component: AddEventoComponent},
 {path: 'eventos/vista-evento/:id', component: VistaEventoComponent},
 {path: 'eventos/editar-evento', component: EditarEventoComponent},
 {path: 'eventos/editor/:id', component: EditorComponent}, 
 
 
  {path: '', pathMatch: 'full'  , redirectTo: 'home'}//por defecto
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
