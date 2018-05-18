import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './generic/home/home.component';
import { OfertasComponent } from './generic/educacion/ofertas/ofertas.component';
import { TutoriaaddComponent } from './generic/educacion/tutoria-add/tutoriaadd.component';
import { TutoriaViewComponent } from './generic/educacion/tutoria-view/tutoria-view.component';
import { PublicarComponent } from './generic/publicar/publicar.component';
import { VistaEventoComponent } from './generic/eventos/vistaevento/vistaevento.component';

/**agregar las rutas */
const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'educacion/ofertas', component: OfertasComponent},
 {path: 'educacion/tutoria-add', component: TutoriaaddComponent},
 {path: 'educacion/tutoria-view/:id', component: TutoriaViewComponent},
 {path: 'publicar', component: PublicarComponent},
 {path: 'evento/vistaevento/:id', component: VistaEventoComponent},
 
  {path: '', pathMatch: 'full', redirectTo: 'home'},//por defecto
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
